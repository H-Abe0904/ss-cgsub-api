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

 /**
  * LZ在庫データを管理するコントローラクラス
  */
@Controller('lzstock')
@ApiTags('lzstock')
export class LzstockController {
    constructor(
        @InjectQueue('bulk-insert') private bulkInsertQueue:Queue,
        private lzstockService: LzstockService,
    ){}

    /**
     *  LZ在庫データを受け取り、バルクインサートキューに追加する
     * @param stock 在庫データの配列
     * @returns  キューに追加されたことを示すメッセージ
     */
    @Post()
    @ApiOperation({ summary: 'Post AllStock from LZ'})
    @HttpCode(HttpStatus.ACCEPTED)
    async createLZStock(@Body() stock:any[]){
        await this.bulkInsertQueue.add('insert-StockData', {stock});
        return {message: 'WMS在庫データがキューに追加されました'}
    }
}
