import * as path from 'path';
import * as fs from 'fs';
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
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { count, error } from 'console';
import { BlockMstService } from './block-mst.service';
import { BlockMasterDTO } from './dto';

const logger = new Logger('BlockMstController');

@Controller('block-mst')
@ApiTags('block-mst')
export class BlockMstController {
    constructor(private readonly blockMstService: BlockMstService) { }

    /**
     * ブロックマスタ全取得
     * @returns フラグの状態に関係なくデータ取得
     */
    @Get('getall')
    @HttpCode(HttpStatus.OK)
    async getAllBlockMaster(): Promise<BlockMasterDTO[]>{
        return this.blockMstService.getAllBlock();
    }



    /**
     * 
     * @param file 
     * @returns 
     */
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        dest: 'D:\\Data\\projects\\ss-cgsub-sys\\blockMstData',
        storage: diskStorage({
            filename: (req, file, callback) => {
                const name = file.originalname.split('.')[0];
                const extension = path.extname(file.originalname);
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);

                callback(null, `${name}-${uniqueSuffix}${extension}`);
            },
        })
    }))

    @HttpCode(HttpStatus.ACCEPTED)
    async masterUpload(@UploadedFile() file: Express.Multer.File) {
        const fullPath = path.join(file.destination, file.filename);
        if (!file) {
            throw new BadRequestException('ファイルが指定されていません');
        }

        try {
            await this.blockMstService.truncateBlock();
            Logger.log('ブロックマスタを削除しました');

            await this.blockMstService.bulkInsertBlockMST(fullPath);
            Logger.log('LZ在庫データ取込中');

            return {
                message: '在庫データ取込完了',
                maxRecordsInserted: count
            };
        } catch (err) {
            logger.error(`CSV取込エラー: ${err.message}`, err.blockMaster);
            throw new BadRequestException(`データ処理エラー: ${err.message}`);
        } finally {
            try {
                fs.unlinkSync(fullPath);
                logger.log(`取込元ファイルを削除しました: ${fullPath}`);
            } catch (unlinkErr) {
                logger.error(`取込元フォルダの削除に失敗しました: ${fullPath}: ${unlinkErr.message}`);
            }
        }
    }



}
