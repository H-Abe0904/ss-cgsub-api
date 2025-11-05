import type from "os";
import {
	BeforeInsert,
	Column,
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn
} from "typeorm";

/**
 * LZ在庫CSVデータのエンティティクラス
 */
@Entity({ name: "lzstock" })
export class Lzstock {
	// 契約者ID
	@Column()
	contractor_id: string;
	// 契約者名
	@Column()
	contractor_name: string;
	@Column()
	



}