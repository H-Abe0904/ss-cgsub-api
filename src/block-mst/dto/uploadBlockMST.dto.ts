import { ArrayNotEmpty, IsArray } from "class-validator";
import { BlockMasterDTO } from "./block-mst.dto";

/**
 * CSVデータアップロード時のデータ定義
 */
export class uploadBlockMstDTO {
	@IsArray()
	@ArrayNotEmpty()

	data: BlockMasterDTO;
}