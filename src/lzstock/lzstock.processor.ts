import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('bulk-insert')
export class BulkProcessor extends WorkerHost{
    constructor(private readonly )
}