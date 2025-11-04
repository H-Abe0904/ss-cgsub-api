import { 
    Body,
    Controller,
    Post,
    RawBody,
    HttpCode,
    HttpStatus,
    UseGuards,
    Put,
    Get,
    Param,
    Delete,
    Query
 } from '@nestjs/common';
 import { InjectQueue } from '@nestjs/bullmq';
 import  { Queue } from 'bullmq';
 import {LzstockService} from './lzstock.service';
 import {ApiTags, ApiOperation} from '@nestjs/swagger';

@Controller('lzstock')
@ApiTags('lzstock')
export class LzstockController {
    constructor(
        @InjectQueue('bulk-insert') private bulkInsertQueue:Queue,
        private lzstockService: LzstockService,
    ){}

    @Post()
    @ApiOperation({ summary: 'Post AllStock from LZ'})
    @HttpCode(HttpStatus.ACCEPTED)
    async createLZStock(@Body() stock:any[]){
        await this.bulkInsertQueue.add('insert-StockData', {lzstock});
        return {message: 'WMS在庫データがキューに追加されました'}
    }
}
