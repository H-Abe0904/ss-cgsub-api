import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bullmq';
import { Repository } from 'typeorm';
import { Lzstock } from './models/lzstock.entity';

/**
 * LZ在庫データを管理するサービスクラス
 */
@Injectable()
export class LzstockService {
	constructor(@InjectQueue('bulk-insert') private bulkInsertQueue:Queue){}

	public async addJob(csvData:Lzstock[]):Promise<void>{
		await this.bulkInsertQueue.add('lzstock-bulk-insert', {csvData:csvData});
	}
}
