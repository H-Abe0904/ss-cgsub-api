import * as fs from 'fs';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as iconv from 'iconv-lite';
import csv from 'csv-parser';
import { LzBlockMST } from './models';
import { BlockMasterDTO, uploadBlockMstDTO } from './dto';
import { Readable } from 'stream';

const CSV_HEADERS = [
	'ブロック略称', 'ブロック名称', '在庫情報算出フラグ'
];

const BATCH_SIZE:number = 1000;						//	バッチインサート時の単位
const logger = new Logger('LZ_BlockMaster');

/**
 * CSVインポートジョブのインターフェース(ブロックマスタ用)
 */
export interface CsvImportJob {
	data: BlockMasterDTO[];
}

@Injectable()
export class BlockMstService {
	constructor(
		@InjectRepository(LzBlockMST)
		private LzBlockRepository: Repository<LzBlockMST>,
	) { }

	/**
	 * CSVの値をDTOに合わせて変換する関数
	 * @param data CSVから読み込んだKey-Valueデータ
	 * @returns 型変換済みのDTOオブジェクト
	 */
	private transformRecord(data:any):BlockMasterDTO {
		const transformed: any = { ...data };

		Object.keys(transformed).forEach(key => {
			if(transformed[key] === '') {
				transformed[key] === null;
			}
		});
		return transformed as BlockMasterDTO
	}

	/**
	 * ブロックマスタの一括インサート処理
	 * @param filePath 「ブロックマスタ.csv」
	 * @returns 
	 */
	async bulkInsertBlockMST(filePath: string): Promise<number> {
		let maxRecords = 0;
		let batch: BlockMasterDTO[] = [];

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
					const record = this.LzBlockRepository.create(data);
					batch.push(record);
					maxRecords++;

					if(batch.length >= BATCH_SIZE) {

					}

				}
			})
		})
	}


	/**
	 * ブロックマスタのレコード全削除
	 */
	async truncateBlock(): Promise<void> {
		await this.LzBlockRepository.query('TRUNCATE TABLE dbmst_lz_block');
		return console.log('削除完了')
	}
}
