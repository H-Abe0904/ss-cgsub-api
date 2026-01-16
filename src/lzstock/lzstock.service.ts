import * as fs from 'fs';
import * as iconv from 'iconv-lite'
import csv from 'csv-parser';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lzstock, stockForCustomer } from './models';
import {
	CreateLzStockDto,
	UploadLzStockCSVDto,
	StockForCustomerDto
} from './dto';
import { Readable } from 'stream';
import { buffer } from 'stream/consumers';

// 一時ファイルで実行
const CSV_HEADERS = [
	'契約者ID', '契約者名', '荷主ID', '荷主名', '倉庫ID', '倉庫名', 'ブロックID',
	'ブロック略称', 'ロケーション', '入荷日', '商品ID', '商品名', '検索名称',
	'品質区分ID', '品質区分', 'ロット', '有効期限', '在庫キー1', '在庫キー1名称',
	'在庫キー2', '在庫キー2名称', '在庫キー3', '在庫キー3名称', '在庫キー4',
	'在庫キー4名称', '在庫数_引当数含む', '引当数', 'バーコード', 'バラ', 'ボール',
	'ロケ引当条件', 'ロケ業務区分', '取置取引先ID', '取置取引先名', '梱包形態',
	'棚卸状況', '検索名称2', '仕入単価', '小売価格', '小売価格2', '小売価格3',
	'小売価格4', '大分類', '中分類', '小分類', 'ロット管理フラグ', '有効期限区分',
	'入荷日管理フラグ', '温度帯区分', 'セット構成区分', '在庫区分', '引当不可日数',
	'入荷期限日数', '商品予備項目001', '商品予備項目002', '商品予備項目003',
	'商品予備項目004', '商品予備項目005', '商品予備項目006', '商品予備項目007',
	'商品予備項目008', '商品予備項目009', '商品予備項目010', '部門ID', '部門名',
	'画像URL', '英語名', '重量', 'シリアル登録フラグ', 'HT検品対象除外フラグ',
	'納品書出力対象除外ファイル', '発注点管理除外フラグ', '最終入荷日', '最終出荷日',
	'縦_SKU単位', '横_SKU単位', '高さ_SKU単位', '仕入単価_SKU単位', '小売価格_SKU単位',
	'小売価格2_SKU単位', '小売価格3_SKU単位', '小売価格4_SKU単位', '小売価格5_SKU単位',
	'SKU予備項目001', 'SKU予備項目002', 'SKU予備項目003', 'SKU予備項目004',
	'SKU予備項目005', 'SKU予備項目006', 'SKU予備項目007', 'SKU予備項目008',
	'SKU予備項目009', 'SKU予備項目010', 'ブロックグループID', 'ブロックグループ名称'
];
const BATCH_SIZE = 1000;
const logger = new Logger('LZStockService');

/**
 * CSVインポートジョブのインターフェース
 */
export interface CsvImportJob {
	data: CreateLzStockDto[];
}

/**
 * LZ在庫データを管理するサービスクラス
 */
@Injectable()
export class LzstockService {
	constructor(
		@InjectRepository(Lzstock)
		private LzstockRepository: Repository<Lzstock>,
		@InjectRepository(stockForCustomer)
		private AvailableStockRepository: Repository<stockForCustomer>
	) { }


	/**
	 * CSVの値をDTOに合わせて変換する関数
	 * @param data CSVから読み込んだKey-Valueデータ
	 * @returns 型変換済みDTOオブジェクト
	 */
	private transformRecord(data: any): CreateLzStockDto {
		const transformed: any = { ...data };

		transformed['在庫数_引当数含む'] = parseInt(data['在庫数_引当数含む']) || 0;
		transformed['引当数'] = parseInt(data['引当数']) || 0;

		const dateFields = ['入荷日', '有効期限', '最終入荷日', '最終出荷日'];
		dateFields.forEach(field => {
			if (transformed[field] === '') {
				transformed[field] = null;
			}
		});

		Object.keys(transformed).forEach(key => {
			if (transformed[key] === '') {
				transformed[key] === null;
			}
		});

		return transformed as CreateLzStockDto;
	}

	/**
	 * 	LZ在庫CSVデータを一括挿入する
	 * @param data	 LZ在庫CSVデータの配列 
	 */
	async bulkInsertLzStock(filePath: string): Promise<number> {
		let maxRecords = 0;
		let batch: CreateLzStockDto[] = [];

		return new Promise((resolve, reject) => {
			const fileStream = fs.createReadStream(filePath);

			const csvStream: Readable = fileStream
				.pipe(iconv.decodeStream('Shift-JIS'))
				.pipe(csv({
					headers: CSV_HEADERS,
					skipLines: 1,
				}));

			csvStream.on('data', async (data: any) => {
				try {
					const transformedRecord = this.transformRecord(data)

					const record = this.LzstockRepository.create(transformedRecord);
					batch.push(record);
					maxRecords++;

					if (batch.length >= BATCH_SIZE) {
						csvStream.pause();
						await this.LzstockRepository.insert(batch);
						batch = []

						csvStream.resume();
					}
				} catch (err) {
					logger.error(`CSV処理エラー: ${maxRecords + 1}: ${err.message}`);
					csvStream.destroy(err);

				}
			})
				.on('end', async () => {
					if (batch.length > 0) {
						await this.LzstockRepository.insert(batch);
					}
					logger.log(`バッチインサート(LZ在庫)完了 件数: ${maxRecords}`);
					resolve(maxRecords);
				})
				.on('error', (error) => {
					logger.error(`ファイル読出エラー: ${error.message}`);
					reject(error);
				})
		}
		)
	}

	/**
	 * LZ在庫データを保存する
	 * @param data LZ在庫データDTO
	 * @returns 保存されたLZ在庫エンティティ
	 */
	async saveLzStock(data: CreateLzStockDto): Promise<void> {
		try {
			// cast to any because entity properties use Japanese keys that don't match TypeScript type of Lzstock
			const lzstock: Lzstock = this.LzstockRepository.create({
				// 契約者ID
				契約者ID: data.契約者ID,
				// 契約者名
				契約者名: data.契約者名,
				// 荷主ID
				荷主ID: data.荷主ID,
				// 荷主名
				荷主名: data.荷主名,
				// 倉庫ID
				倉庫ID: data.倉庫ID,
				// 倉庫名
				倉庫名: data.倉庫名,
				// ブロックID
				ブロックID: data.ブロックID,
				// ブロック略称
				ブロック略称: data.ブロック略称,
				// ロケーション
				ロケーション: data.ロケーション,
				// 入荷日
				入荷日: data.入荷日,
				// 商品ID
				商品ID: data.商品ID,
				// 商品名
				商品名: data.商品名,
				// 検索名称
				検索名称: data.検索名称,
				// 品質区分ID
				品質区分ID: data.品質区分ID,
				// 品質区分
				品質区分: data.品質区分,
				// ロット
				ロット: data.ロット,
				// 有効期限
				有効期限: data.有効期限,
				// 在庫キー1
				在庫キー1: data.在庫キー1,
				// 在庫キー1名称
				在庫キー1名称: data.在庫キー1名称,
				// 在庫キー2
				在庫キー2: data.在庫キー2,
				// 在庫キー2名称
				在庫キー2名称: data.在庫キー2名称,
				// 在庫キー3
				在庫キー3: data.在庫キー3,
				// 在庫キー3名称
				在庫キー3名称: data.在庫キー3名称,
				// 在庫キー4
				在庫キー4: data.在庫キー4,
				// 在庫キー4名称
				在庫キー4名称: data.在庫キー4名称,
				// 在庫数(引当数含む)
				在庫数_引当数含む: data.在庫数_引当数含む,
				// 引当数
				引当数: data.引当数,
				// バーコード
				バーコード: data.バーコード,
				// バラ
				バラ: data.バラ,
				// ボール
				ボール: data.ボール,
				// ロケ引当条件
				ロケ引当条件: data.ロケ引当条件,
				// ロケ業務区分
				ロケ業務区分: data.ロケ業務区分,
				// 取置取引先ID
				取置取引先ID: data.取置取引先ID,
				// 取置取引先名
				取置取引先名: data.取置取引先名,
				// 梱包形態
				梱包形態: data.梱包形態,
				// 棚卸状況
				棚卸状況: data.棚卸状況,
				// 検索名称2
				検索名称2: data.検索名称2,
				// 仕入単価
				仕入単価: data.仕入単価,
				// 小売価格
				小売価格: data.小売価格,
				// 小売価格2
				小売価格2: data.小売価格2,
				// 小売価格3
				小売価格3: data.小売価格3,
				// 小売価格4
				小売価格4: data.小売価格4,
				// 大分類
				大分類: data.大分類,
				// 中分類
				中分類: data.中分類,
				// 小分類
				小分類: data.小分類,
				// ロット管理フラグ
				ロット管理フラグ: data.ロット管理フラグ,
				// 有効期限区分
				有効期限区分: data.有効期限区分,
				// 入荷日管理フラグ
				入荷日管理フラグ: data.入荷日管理フラグ,
				// 温度帯区分
				温度帯区分: data.温度帯区分,
				// セット構成区分
				セット構成区分: data.セット構成区分,
				// 在庫区分
				在庫区分: data.在庫区分,
				// 引当不可日数
				引当不可日数: data.引当不可日数,
				// 入荷期限日数
				入荷期限日数: data.入荷期限日数,
				// 商品予備項目001
				商品予備項目001: data.商品予備項目001,
				// 商品予備項目002
				商品予備項目002: data.商品予備項目002,
				// 商品予備項目003
				商品予備項目003: data.商品予備項目003,
				// 商品予備項目004
				商品予備項目004: data.商品予備項目004,
				// 商品予備項目005
				商品予備項目005: data.商品予備項目005,
				// 商品予備項目006
				商品予備項目006: data.商品予備項目006,
				// 商品予備項目007
				商品予備項目007: data.商品予備項目007,
				// 商品予備項目008
				商品予備項目008: data.商品予備項目008,
				// 商品予備項目009
				商品予備項目009: data.商品予備項目009,
				// 商品予備項目010
				商品予備項目010: data.商品予備項目010,
				// 部門ID
				部門ID: data.部門ID,
				// 部門名
				部門名: data.部門名,
				// 画像URL
				画像URL: data.画像URL,
				// 英語名
				英語名: data.英語名,
				// 重量
				重量: data.重量,
				// シリアル登録フラグ
				シリアル登録フラグ: data.シリアル登録フラグ,
				// HT検品対象除外フラグ
				HT検品対象除外フラグ: data.HT検品対象除外フラグ,
				// 納品書出力対象除外ファイル
				納品書出力対象除外フラグ: data.納品書出力対象除外フラグ,
				// 発注点管理除外フラグ
				発注点管理除外フラグ: data.発注点管理除外フラグ,
				// 最終入荷日
				最終入荷日: data.最終入荷日,
				// 最終出荷日
				最終出荷日: data.最終出荷日,
				// 縦_SKU単位
				縦_SKU単位: data.縦_SKU単位,
				// 横_SKU単位
				横_SKU単位: data.横_SKU単位,
				// 高さ_SKU単位
				高さ_SKU単位: data.高さ_SKU単位,
				// 仕入単価_SKU単位
				仕入単価_SKU単位: data.仕入単価_SKU単位,
				// 小売価格_SKU単位
				小売価格_SKU単位: data.小売価格_SKU単位,
				// 小売価格2_SKU単位
				小売価格2_SKU単位: data.小売価格2_SKU単位,
				// 小売価格3_SKU単位
				小売価格3_SKU単位: data.小売価格3_SKU単位,
				// 小売価格4_SKU単位
				小売価格4_SKU単位: data.小売価格4_SKU単位,
				// 小売価格5_SKU単位
				小売価格5_SKU単位: data.小売価格5_SKU単位,
				// SKU予備項目001
				SKU予備項目001: data.SKU予備項目001,
				// SKU予備項目002
				SKU予備項目002: data.SKU予備項目002,
				// SKU予備項目003
				SKU予備項目003: data.SKU予備項目003,
				// SKU予備項目004
				SKU予備項目004: data.SKU予備項目004,
				// SKU予備項目005
				SKU予備項目005: data.SKU予備項目005,
				// SKU予備項目006
				SKU予備項目006: data.SKU予備項目006,
				// SKU予備項目007
				SKU予備項目007: data.SKU予備項目007,
				// SKU予備項目008
				SKU予備項目008: data.SKU予備項目008,
				// SKU予備項目009
				SKU予備項目009: data.SKU予備項目009,
				// SKU予備項目010
				SKU予備項目010: data.SKU予備項目010,
				// ブロックグループID
				ブロックグループID: data.ブロックグループID,
				// ブロックグループ名称
				ブロックグループ名称: data.ブロックグループ名称,
			});
			// save the created entity and return it
			const saved = await this.LzstockRepository.insert(lzstock); // ← await が重要
			console.log('saved id=', saved);
			// return saved; // エンティティを保存して返す
		} catch (error) {
			console.error('Error saving Lzstock:', error);
			throw error;
		}
	}

	/**
	 * LZ有効在庫データ全件取得
	 * @returns LZ有効在庫データ(全件)
	 */
	async getAvailableStk(): Promise<StockForCustomerDto[]> {
		const entities = await this.AvailableStockRepository.find();

		return entities.map(entity => {
			return {
				productCode: entity.商品コード,
				reportProductName: entity.商品名_帳票,
				makerName: entity.ﾒｰｶｰ名,
				stockQuantity: entity.在庫数_引当数含む,
				salesRemaining: entity.売上残数,
				effectiveStock: entity.有効在庫数,
			};
		});
	}

	/**
	 * LZ在庫テーブルを全削除する(レコード挿入前に実行)
	 */
	async truncateStkTable(): Promise<void> {
		await this.LzstockRepository.query('TRUNCATE TABLE dbwrk_lz_stock');
	}
}