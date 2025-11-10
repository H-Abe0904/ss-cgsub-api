import {
    Body,
    Controller,
    Post,
    HttpCode,
    HttpStatus,
    UseInterceptors,
    UploadedFile,
    BadRequestException,
    UseGuards,
    Put,
    Get,
    Param,
    Delete,
    Query,
    Logger
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import csvParser from 'csv-parser';
import { Readable } from 'stream';
import * as iconv from 'iconv-lite';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import { LzstockService } from './lzstock.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateLzStockDto, UploadLzStockCSVDto } from './dto';
import { count, error } from 'console';

const logger = new Logger('LZStockController');
/**
 * LZ在庫データを管理するコントローラクラス
 */
@Controller('lzstock')
@ApiTags('lzstock')
export class LzstockController {
    constructor(private readonly lzStockService: LzstockService) { }

    /**
     * LZ在庫データ一括取込
     * @param file LZ在庫データのCSVファイル
     */
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        dest: 'D:\\Data\\projects\\ss-cgsub-sys\\stockData',
        storage: diskStorage({
            filename: (req, file, callback) => {
                // ファイル衝突を防ぐため、元のファイル名 + タイムスタンプ + 拡張子を使用
                const name = file.originalname.split('.')[0];
                const extension = path.extname(file.originalname); // 元の拡張子 (.csv) を取得
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);

                // [元のファイル名]-[タイムスタンプ].[拡張子] の形式で保存
                callback(null, `${name}-${uniqueSuffix}${extension}`);
            },
        })
    }))

    /**
     * 
     */
    @HttpCode(HttpStatus.ACCEPTED)
    async testUpload(@UploadedFile() file: Express.Multer.File) {
        const fullPath = path.join(file.destination, file.filename);
        if (!file) {
            throw new BadRequestException('ファイルが指定されていません');
        }

        // const containerFilePath = file.path;
        try {
            // TRUNCATE処理
            await this.lzStockService.truncateStkTable()
            Logger.log('既存の在庫データを削除しました')

            Logger.log(`LZ在庫データ取込中`)
            await this.lzStockService.bulkInsertLzStock(fullPath);


            return {
                message: '在庫データ取込完了',
                maxRecordsInserted: count
            };

        } catch (err) {
            logger.error(`CSV取込エラー: ${err.message}`, err.stock);
            throw new BadRequestException(`データ処理エラー: ${err.message}`);
        }finally{
            try{
                fs.unlinkSync(fullPath);
                logger.log(`取込元ファイルを削除しました: ${fullPath}`);
            }catch(unlinkErr){
                logger.error(`取込元フォルダの削除に失敗しました: ${fullPath}: ${unlinkErr.message}`);
            }
        }
    }

    /**
     * LZ在庫テーブル全削除する
     * @returns 削除完了メッセージ
     */
    @Delete('delete')
    @ApiOperation({ summary: 'TRUNCATE LZStock' })
    @HttpCode(HttpStatus.OK)
    async deleteAllLzStock(): Promise<{ message: string }> {

        await this.lzStockService.truncateStkTable();
        return { message: '全てのLZ在庫データが削除されました' };
    }
}
