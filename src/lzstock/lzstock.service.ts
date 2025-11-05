import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bullmq';
import { Repository } from 'typeorm';
import { Lzstock } from './models/lzstock.entity';
import { CreateLzStockDto, UploadLzStockCSVDto } from './dto';

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
		@InjectQueue('bulk-insert')
		private bulkInsertQueue: Queue<CsvImportJob>) { }

	/**
	 *  LZ在庫CSVの一括登録ジョブを追加する
	 * @param csvData LZ在庫(CSVデータ)の配列 
	 */
	public async addJob(csvData: CreateLzStockDto[]): Promise<void> {
		await this.bulkInsertQueue.add('bulk-insert', {
			data: csvData
		});
		console.log(`Job added with ID: ${csvData.length}`);
	}

/**
 * LZ在庫データを保存する
 * @param data LZ在庫データDTO
 * @returns 保存されたLZ在庫エンティティ
 */
	async saveLzStock(data: CreateLzStockDto): Promise<Lzstock> {
		const lzstock = this.LzstockRepository.create({
			contractor_id: 		data.contractor_id,
			contractor_name: 	data.contractor_name,
			shipper_id: 		data.shipper_id,
			shipper_name: 		data.shipper_name,
			warehouse_id: 		data.warehouse_id,
			warehouse_name: 	data.warehouse_name,
			block_id: 			data.block_id,
			block_short_name: 	data.block_short_name,
			location: 			data.location,
			arrival_date: 		data.arrival_date,
			item_id: 			data.item_id,
			item_name: 			data.item_name,
			item_search_name: 	data.item_search_name,
			quality_div_id: 	data.quality_div_id,
		});

		return this.LzstockRepository.save(lzstock);
	}
}
