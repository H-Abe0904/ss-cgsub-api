import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

/**
 * バルクインサート処理を行うプロセッサクラス
 */
@Processor('bulk-insert')
export class BulkProcessor extends WorkerHost{
    constructor(private readonly )
}