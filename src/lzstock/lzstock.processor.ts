import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Injectable } from '@nestjs/common';
import { LzstockService, CsvImportJob } from './lzstock.service';

/**
 * バルクインサート処理を行うプロセッサクラス
 */
@Injectable()
@Processor('bulk-insert')

export class CsvImportJob extends WorkerHost {
    constructor(private readonly lzStockService: LzstockService) {
        super();
    }

    async process(job: Job<CsvImportJob>): Promise<void> {
        
    }
}
