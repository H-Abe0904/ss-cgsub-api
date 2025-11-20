import {IsArray, IsDateString,IsBoolean, IsNumber, IsString} from 'class-validator';

/**
 * 在庫データ出力マスタの定義
 */
export class BlockMasterDTO {
	@IsString()
	ブロック略称: string;

	@IsString()
	ブロック名称: string;

	@IsNumber()
	在庫情報算出対象フラグ: boolean;
}