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

        const { data } = job.data; // CsvImportJob からデータを取得
        const savePromises: Promise<Lzstock>[] = []; // 保存用のPromise配列

        // 各レコードを保存するためのPromiseを作成
        for (const record of data) {
            savePromises.push(this.lzStockService.saveLzStock(record));
        }

        // 全ての保存処理を並行して実行
        await Promise.all(savePromises);
        
        // 処理完了メッセージを返す
        return { message: `Processed ${data.length} LZ在庫 records` };
    }
}
