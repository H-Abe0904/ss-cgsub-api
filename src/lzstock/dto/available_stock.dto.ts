import {IsArray, IsDateString, isNumber, IsNumber, IsString} from 'class-validator';

export class available_stockDTO {

    @IsString()
    バーコード: string;

    @IsString()
    商品名: string;

    @IsString()
    ブロック略称: string;

    @IsNumber()
    WMS在庫数: number;

    @IsNumber()
    受注残数: number;

    @IsNumber()
    在庫情報算出対象フラグ: number;

    @IsNumber()
    有効在庫数: number;

}