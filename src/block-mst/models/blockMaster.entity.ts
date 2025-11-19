import { Entity, Column, PrimaryColumn } from "typeorm";

/**
 * 在庫データの提供対象をコントロールするテーブルの
 * エンティティ
 */
@Entity({ name: 'dbmst_lz_block' })
export class LzBlockMST {

	//	ブロック略称(アルファベット3文字)
	@PrimaryColumn({ type: 'varchar', length: 3, nullable: false})
	ブロック略称: string;

	@Column({ type: 'varchar', length: 100, nullable: false })
	ブロック名称: string;

	//	得意先に提供する在庫データのブロックをコントロールするフラグ
	@Column({type: 'tinyint', nullable: true, default: false})
	在庫情報算出対象フラグ: number;

}