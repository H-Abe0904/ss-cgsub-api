import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bullmq';
import { Repository } from 'typeorm';

/**
 * LZ在庫データを管理するサービスクラス
 */
@Injectable()
export class LzstockService {
	constructor(@InjectQueue('bulk-insert') private bulkInsertQueue:Queue){}
}
