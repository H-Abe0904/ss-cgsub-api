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
export class LzstockProcessor extends WorkerHost {
    constructor(private readonly lzStockService: LzstockService) {
        super();
    }

    /**
     * バルクインサートジョブの処理メソッド
     * @param job ジョブオブジェクト
     * @returns 処理結果のメッセージ
     */
  async process(job: Job<CsvImportJob>): Promise<any> {
    const data = job.data?.data ?? [];
    console.log(`Processing job id=${job.id} items=${data.length}`);

    if (!Array.isArray(data) || data.length === 0) {
      console.warn(`Job ${job.id} has no data - skipping`);
      return { message: 'no data' };
    }

    const results = await Promise.allSettled(
      data.map((record, idx) =>
        this.lzStockService.saveLzStock(record)
          .then(saved => ({ ok: true, idx, saved }))
          .catch(err => ({ ok: false, idx, error: err?.message ?? err }))
      )
    );

    const succeeded = results.filter(r => (r as any).ok === true).length;
    const failed = results.filter(r => (r as any).ok === false || r.status === 'rejected');

    if (failed.length) {
      console.error(`Job ${job.id} completed with failures: failed=${failed.length}`, failed.slice(0,5));
      // 必要ならここで throw してジョブを失敗扱いにする
      return { message: `Processed with errors: succeeded=${succeeded} failed=${failed.length}` };
    }

    console.log(`Job ${job.id} succeeded: saved=${succeeded}`);
    return { message: `Processed ${succeeded} LZ在庫 records` };
  }
}
