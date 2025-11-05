import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Injectable } from '@nestjs/common';
import { LzstockService, CsvImportJob } from './lzstock.service';
import { Lzstock } from './models/lzstock.entity';

/**
 * バルクインサート処理を行うプロセッサクラス
 */
@Injectable()
@Processor('bulk-insert')
export class process extends WorkerHost {
    constructor(private readonly lzStockService: LzstockService) {
        super();
    }

    /**
     * バルクインサートジョブの処理メソッド
     * @param job ジョブオブジェクト
     * @returns 処理結果のメッセージ
     */
    async process(job: Job<CsvImportJob>): Promise<any> {
        console.log(`Processing job with ID: ${job.id} and ${job.data.data.length} records`);

        const { data } = job.data;
        const savePromises: Promise<Lzstock>[] = [];

        for (const record of data) {
            savePromises.push(this.lzStockService.saveLzStock(record));
        }
        await Promise.all(savePromises);
        return { message: `Processed ${data.length} LZ在庫 records` };
    }
}
