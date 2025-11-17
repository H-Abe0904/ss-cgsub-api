import * as fs from 'fs';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as iconv from 'iconv-lite';
import csv from 'csv-parser';
import { LzBlockMST } from './models';
import { BlockMasterDTO, uploadBlockMstDTO } from './dto';
import { Readable } from 'stream';

const CSV_HEADERS = [
	'ブロック略称', 'ブロック名称', '在庫情報算出フラグ'
];

const BATCH_SIZE = 1000;
const logger = new Logger('LZ_BlockMaster');

/**
 * CSVインポートジョブのインターフェース(ブロックマスタ用)
 */
export interface CsvImportJob{
	data: BlockMasterDTO[];
}

@Injectable()
export class BlockMstService {
	constructor(
		@InjectRepository(LzBlockMST)
		private LzBlockRepository: Repository<LzBlockMST>,
	){}

	async bulkInsertBlockMST(filePath: string): Promise<number> {
		let maxRecords = 0;
		let batch: BlockMasterDTO[] = [];

		return new Promise((resolve, reject) => {
			const fileStream = fs.createReadStream(filePath);

			const csvStream: Readable = fileStream
			.pipe(iconv.decodeStream('Shift-JIS'))
			.pipe(csv({
				headers: CSV_HEADERS,
				skipLines: 1,
			}));

			csvStream.on('data', async (data:any) => {
				try{
					const record = this.LzBlockRepository.create(data);
					batch.push(record);
					maxRecords++;

					

				}
			})
		})
	}


	/**
	 * ブロックマスタのレコード全削除
	 */
	async truncateBlock(): Promise<void> {
		await this.LzBlockRepository.query('TRUNCATE TABLE dbmst_lz_block');
		return console.log('削除完了')
	} 
}
