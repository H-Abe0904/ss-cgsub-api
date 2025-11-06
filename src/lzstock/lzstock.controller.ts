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
        if (!file || file.mimetype !== 'text/csv') {
            throw new BadRequestException('CSV取込エラー: ファイルが提供されていないか、無効な形式です。');
        }
        const stream = Readable.from(file.buffer.toString());   // バッファをストリームに変換
        const results: CreateLzStockDto[] = [];                 // 解析結果を格納する配列

        const validateCsvData = (data: any): CreateLzStockDto => {
            // 必要なバリデーションを実装
            if (!data.requiredField) {
                throw new BadRequestException('必須フィールドが不足しています');
            }
            return data as CreateLzStockDto; // 適切な型にキャスト
        };

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

    return {
      message: `${results.length} 件のWMS在庫データがキューに追加されました`,
      filename: file.originalname,

        // UploadLzStockCSVDto.data = results;

        // await this.lzStockService.addJob(UploadLzStockCSVDto.data);

        // return { message: `WMS在庫データが${UploadLzStockCSVDto.data.length}件 キューに追加されました` }

    }
}}
