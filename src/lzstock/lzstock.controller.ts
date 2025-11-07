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
     * 
     * @param file 
     */
    @Post('test-upload')
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

        const containerFilePath = file.path;
        try {
            // TRUNCATE処理(未実装)
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
     *  LZ在庫データを受け取り、バルクインサートキューに追加する
     * @param stock 在庫データの配列
     * @returns  キューに追加されたことを示すメッセージ
     */
    @Post('upload-csv')
    @UseInterceptors(FileInterceptor('file'))
    @ApiOperation({ summary: 'Post AllStock from LZ' })
    @HttpCode(HttpStatus.ACCEPTED)
    async uploadLZStock(@UploadedFile() file: Express.Multer.File): Promise<{ message: string; filename: string }> {
        await this.lzStockService.clearAllJobs(); // キュー内の既存ジョブをクリア

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
