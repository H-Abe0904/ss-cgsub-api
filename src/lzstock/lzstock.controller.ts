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
    Query
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import csvParser from 'csv-parser';
import { Readable } from 'stream';
import * as iconv from 'iconv-lite';
import { LzstockService } from './lzstock.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateLzStockDto, UploadLzStockCSVDto } from './dto';

/**
 * LZ在庫データを管理するコントローラクラス
 */
@Controller('lzstock')
@ApiTags('lzstock')
export class LzstockController {
    constructor(private readonly lzStockService: LzstockService) { }
    /**
     *  LZ在庫データを受け取り、バルクインサートキューに追加する
     * @param stock 在庫データの配列
     * @returns  キューに追加されたことを示すメッセージ
     */
    @Post('upload-csv')
    @UseInterceptors(FileInterceptor('file'))
    @ApiOperation({ summary: 'Post AllStock from LZ' })
    @HttpCode(HttpStatus.ACCEPTED)
    async uploadLZStock(@UploadedFile() file: Express.Multer.File): Promise<{ message: string; filename: string }> {
        
        // 許可されているMIMEタイプのリスト
        const allowedMimes = ['text/csv', 'application/csv', 'text/plain', 'application/vnd.ms-excel'];

        // ファイル名の拡張子を確認
        const isCsvByName = file?.originalname?.toLowerCase().endsWith('.csv');

        // ファイルの存在とMIMEタイプの検証
        if (!file) {
            throw new BadRequestException('CSV取込エラー: ファイルが提供されていません。');
        }

        // 拡張子とMIMEタイプの両方を確認
        if (!isCsvByName && !allowedMimes.includes(file.mimetype)) {
            throw new BadRequestException('CSV取込エラー: 拡張子が .csv ではないか、MIMEタイプが不正です。');
        }

        let decodedText = iconv.decode(file.buffer, 'Shift_JIS'); // Shift_JISからUTF-8にデコード

        // 置換文字が含まれる場合は別エンコーディングを試す
        if (decodedText.includes('�')) { 
            decodedText = iconv.decode(file.buffer, 'cp932');
        }

        const stream = Readable.from(decodedText);                  // バッファをストリームに変換
        const results: CreateLzStockDto[] = [];                     // 解析結果を格納する配列

        /**
         * CSVデータの解析とバリデーション
         */
        await new Promise<void>((resolve, reject) => {
            stream
                .pipe(csvParser())                                          // CSVパーサーにパイプ接続
                .on('data', (data: CreateLzStockDto) => results.push(data)) // データを配列に追加
                .on('end', () => resolve())                                 // 解析完了時に解決
                .on('error', (error) => reject(error));                     // エラー時に拒否
        });

        console.log(`Parsed ${results.length} rows.`);
        
        await this.lzStockService.addJob(results);               // バルクインサートジョブを追加
        return {
            message: `${results.length} 件のWMS在庫データがキューに追加されました`,
            filename: file.originalname,

            // return { message: `WMS在庫データが${UploadLzStockCSVDto.data.length}件 キューに追加されました` }

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
