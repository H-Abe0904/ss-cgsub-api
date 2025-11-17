import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as iconv from 'iconv-lite';
import csv from 'csv-parser';
import { LzBlockMST } from './models';
import { BlockMasterDTO, uploadBlockMstDTO } from './dto';
import { Readable } from 'stream';

@Injectable()
export class BlockMstService {


	async truncateBlock(): Promise<void> {
		await.
	} 
}
