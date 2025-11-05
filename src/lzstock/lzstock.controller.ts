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
import { CreateLzStockDto, UploadLzStockCSVDto } from './dto';

 /**
  * LZ在庫データを管理するコントローラクラス
  */
@Controller('lzstock')
@ApiTags('lzstock')
export class LzstockController {
    constructor(private readonly lzStockService:LzstockService){}

    /**
     *  LZ在庫データを受け取り、バルクインサートキューに追加する
     * @param stock 在庫データの配列
     * @returns  キューに追加されたことを示すメッセージ
     */
    @Post()
    @ApiOperation({ summary: 'Post AllStock from LZ'})
    @HttpCode(HttpStatus.ACCEPTED)
    async uploadLZStock(@Body() UploadLzStockCSVDto: UploadLzStockCSVDto){
        await this.lzStockService.addJob(UploadLzStockCSVDto.data);

        return {message: `WMS在庫データが${UploadLzStockCSVDto.data.length}件 キューに追加されました`}
    }
}
