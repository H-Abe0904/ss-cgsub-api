import { ArrayNotEmpty, IsArray } from "class-validator";
import { CreateLzStockDto } from "./LzStockCSV.dto";

/**
 * LZ在庫CSVアップロードDTO
 */
export class UploadLzStockCSVDto {
	@IsArray()
	@ArrayNotEmpty()

	data: CreateLzStockDto[];
}