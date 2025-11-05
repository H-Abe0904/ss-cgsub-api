import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bullmq';
import { Repository } from 'typeorm';
import { Lzstock } from './models/lzstock.entity';
import { CreateLzStockDto } from './dto';

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
		@InjectQueue('bulk-insert')
		private LzstockRepository: Repository<Lzstock>,
		private bulkInsertQueue: Queue<CsvImportJob>) { }

	/**
	 *  LZ在庫CSVの一括登録ジョブを追加する
	 * @param csvData LZ在庫(CSVデータ)の配列 
	 */
	public async addJob(csvData: CreateLzStockDto[]): Promise<void> {
		await this.bulkInsertQueue.add('lzstock-bulk-insert', {
			data: csvData
		});
		console.log(`Job added with ID: ${csvData.length}`);
	}

	/**
	 * LZ在庫データを保存する
	 * @param data  LZ在庫データCSVのDTO
	 * @returns 保存されたLZ在庫エンティティ
	 */
	async saveLzStock(data: CreateLzStockDto): Promise<Lzstock> {
		const lzstock = this.LzstockRepository.create(data);

		return this.LzstockRepository.save(lzstock);
	}
}
