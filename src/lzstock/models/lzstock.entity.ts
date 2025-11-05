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
@Entity({ name: "dbwrk_lz_stock" })
export class Lzstock {
	// 契約者ID
	@Column({ type: 'varchar', length: 100 })
	contractor_id: string;

	// 契約者名
	@Column({ type: 'varchar', length: 100 })
	contractor_name: string;

	// 荷主ID
	@Column({ type: 'varchar', length: 100 })
	shipper_id: string;

	// 荷主名
	@Column({ type: 'varchar', length: 100 })
	shipper_name: string;

	// 倉庫ID
	@Column({ type: 'varchar', length: 100 })
	warehouse_id: string;

	// 倉庫名
	@Column({ type: 'varchar', length: 100 })
	warehouse_name: string;

	// ブロックID
	@Column({ type: 'varchar', length: 100 })
	block_id: string;

	// ブロック略称
	@Column({ type: 'varchar', length: 100 })
	block_short_name: string;

	// ロケーション
	@Column({ type: 'varchar', length: 100 })
	location: string;

	// 入荷日
	@Column({ type: 'varchar', length: 100 })
	arrival_date: String;

	// 商品ID
	@Column({ type: 'varchar', length: 100 })
	item_id: string;

	// 商品名
	@Column({ type: 'varchar', length: 100 })
	item_name: string;

	// 検索名称
	@Column({ type: 'varchar', length: 100 })
	item_search_name: string;

	// 品質区分ID
	@Column({ type: 'varchar', length: 100 })
	quality_div_id: string;

	// 品質区分
	@Column({ type: 'varchar', length: 100 })
	quality_div: string;

	// ロット
	@Column({ type: 'varchar', length: 100 })
	lot: string;

	// 有効期限
	@Column({ type: 'varchar', length: 100 })
	expiration_date: String;

	// 在庫キー1
	@Column({ type: 'varchar', length: 100 })
	stock_key_1: string;

	// 在庫キー1名称
	@Column({ type: 'varchar', length: 100 })
	stock_key_1_name: string;

	// 在庫キー2
	@Column({ type: 'varchar', length: 100 })
	stock_key_2: string;

	// 在庫キー2名称
	@Column({ type: 'varchar', length: 100 })
	stock_key_2_name: string;

	// 在庫キー3
	@Column({ type: 'varchar', length: 100 })
	stock_key_3: string;

	// 在庫キー3名称
	@Column({ type: 'varchar', length: 100 })
	stock_key_3_name: string;

	// 在庫キー4
	@Column({ type: 'varchar', length: 100 })
	stock_key_4: string;

	// 在庫キー4名称
	@Column({ type: 'varchar', length: 100 })
	stock_key_4_name: string;

	// 在庫数(引当数含む)
	@Column({ type: 'varchar', length: 100 })
	stock_qty: number;

	// 引当数
	@Column({ type: 'varchar', length: 100 })
	allocated_qty: number;

	// バーコード
	@Column({ type: 'varchar', length: 100 })
	barcode: string;

	// バラ
	@Column({ type: 'varchar', length: 100 })
	piece: string;

	// ボール
	@Column({ type: 'varchar', length: 100 })
	box: string;

	// ロケ引当条件
	@Column({ type: 'varchar', length: 100 })
	location_alloc_condition: string;

	// ロケ業務区分
	@Column({ type: 'varchar', length: 100 })
	location_business_div: string;

	// 取置取引先ID
	@Column({ type: 'varchar', length: 100 })
	reserved_customer_id: string;

	// 取置取引先名
	@Column({ type: 'varchar', length: 100 })
	reserved_customer_name: string;

	// 梱包形態
	@Column({ type: 'varchar', length: 100 })
	packaging_type: string;

	// 棚卸状況
	@Column({ type: 'varchar', length: 100 })
	inventory_stat: string;

	// 検索名称2
	@Column({ type: 'varchar', length: 100 })
	item_search_name_2: string;

	// 仕入単価
	@Column({ type: 'varchar', length: 100 })
	pur_unit_price: string;

	// 小売価格
	@Column({ type: 'varchar', length: 100 })
	retail_price: string;

	// 小売価格2
	@Column({ type: 'varchar', length: 100 })
	retail_price_2: string;

	// 小売価格3
	@Column({ type: 'varchar', length: 100 })
	retail_price_3: string;

	// 小売価格4
	@Column({ type: 'varchar', length: 100 })
	retail_price_4: string;

	// 大分類
	@Column({ type: 'varchar', length: 100 })
	large_classify: string;

	// 中分類
	@Column({ type: 'varchar', length: 100 })
	middle_classify: string;

	// 小分類
	@Column({ type: 'varchar', length: 100 })
	small_classify: string;

	// ロット管理フラグ
	@Column({ type: 'varchar', length: 100 })
	lot_manage_flg: string;

	// 有効期限区分
	@Column({ type: 'varchar', length: 100 })
	expiration_date_div: string;

	// 入荷日管理フラグ
	@Column({ type: 'varchar', length: 100 })
	arr_date_manage_flg: string;

	// 温度帯区分
	@Column({ type: 'varchar', length: 100 })
	temp_zone_div: string;

	// セット構成区分
	@Column({ type: 'varchar', length: 100 })
	set_structure_div: string;

	// 在庫区分
	@Column({ type: 'varchar', length: 100 })
	stock_div: string;

	// 引当不可日数
	@Column({ type: 'varchar', length: 100 })
	non_alloc_days: string;

	// 入荷期限日数
	@Column({ type: 'varchar', length: 100 })
	arrival_limit_days: string;

	// 商品予備項目001
	@Column({ type: 'varchar', length: 100 })
	item_reserve_001: string;

	// 商品予備項目002
	@Column({ type: 'varchar', length: 100 })
	item_reserve_002: string;

	// 商品予備項目003
	@Column({ type: 'varchar', length: 100 })
	item_reserve_003: string;

	// 商品予備項目004
	@Column({ type: 'varchar', length: 100 })
	item_reserve_004: string;

	// 商品予備項目005
	@Column({ type: 'varchar', length: 100 })
	item_reserve_005: string;

	// 商品予備項目006
	@Column({ type: 'varchar', length: 100 })
	item_reserve_006: string;

	// 商品予備項目007
	@Column({ type: 'varchar', length: 100 })
	item_reserve_007: string;

	// 商品予備項目008
	@Column({ type: 'varchar', length: 100 })
	item_reserve_008: string;

	// 商品予備項目009
	@Column({ type: 'varchar', length: 100 })
	item_reserve_009: string;

	// 商品予備項目010
	@Column({ type: 'varchar', length: 100 })
	item_reserve_010: string;

	// 部門ID
	@Column({ type: 'varchar', length: 100 })
	department_id: string;

	// 部門名
	@Column({ type: 'varchar', length: 100 })
	department_name: string;

	// 画像URL
	@Column({ type: 'varchar', length: 100 })
	image_url: string;

	// 英語名
	@Column({ type: 'varchar', length: 100 })
	english_name: string;

	// 重量
	@Column({ type: 'varchar', length: 100 })
	weight: string;

	// シリアル登録フラグ
	@Column({ type: 'varchar', length: 100 })
	serial_regist_flg: string;

	// HT検品対象除外フラグ
	@Column({ type: 'varchar', length: 100 })
	ht_inspect_exclude_flg: string;

	// 納品書出力対象除外フラグ
	@Column({ type: 'varchar', length: 100 })
	del_note_exclude_flg: string;

	// 発注点管理除外フラグ
	@Column({ type: 'varchar', length: 100 })
	order_point_exclude_flg: string;

	// 最終入荷日
	@Column({ type: 'varchar', length: 100 })
	last_arrival_date: String;

	// 最終出荷日
	@Column({ type: 'varchar', length: 100 })
	last_ship_date: String;

	// 縦_SKU単位
	@Column({ type: 'varchar', length: 100 })
	vertical_sku_unit: string;

	// 横_SKU単位
	@Column({ type: 'varchar', length: 100 })
	horizontal_sku_unit: string;

	// 高さ_SKU単位
	@Column({ type: 'varchar', length: 100 })
	height_sku_unit: string;

	// 仕入単価_SKU単位
	@Column({ type: 'varchar', length: 100 })
	pur_unit_price_sku_unit: string;

	// 小売単価_SKU単位
	@Column({ type: 'varchar', length: 100 })
	retail_price_sku_unit: string;

	// 小売単価2_SKU単位
	@Column({ type: 'varchar', length: 100 })
	retail_price_2_sku_unit: string;

	// 小売単価3_SKU単位
	@Column({ type: 'varchar', length: 100 })
	retail_price_3_sku_unit: string;

	// 小売単価4_SKU単位
	@Column({ type: 'varchar', length: 100 })
	retail_price_4_sku_unit: string;

	// 小売単価5_SKU単位
	@Column({ type: 'varchar', length: 100 })
	retail_price_5_sku_unit: string;

	// SKU予備項目001
	@Column({ type: 'varchar', length: 100 })
	sku_reserve_001: string;

	// SKU予備項目002
	@Column({ type: 'varchar', length: 100 })
	sku_reserve_002: string;

	// SKU予備項目003
	@Column({ type: 'varchar', length: 100 })
	sku_reserve_003: string;

	// SKU予備項目004
	@Column({ type: 'varchar', length: 100 })
	sku_reserve_004: string;

	// SKU予備項目005
	@Column({ type: 'varchar', length: 100 })
	sku_reserve_005: string;

	// SKU予備項目006
	@Column({ type: 'varchar', length: 100 })
	sku_reserve_006: string;

	// SKU予備項目007
	@Column({ type: 'varchar', length: 100 })
	sku_reserve_007: string;

	// SKU予備項目008
	@Column({ type: 'varchar', length: 100 })
	sku_reserve_008: string;

	// SKU予備項目009
	@Column({ type: 'varchar', length: 100 })
	sku_reserve_009: string;

	// SKU予備項目010
	@Column({ type: 'varchar', length: 100 })
	sku_reserve_010: string;

	// ブロックグループID
	@Column({ type: 'varchar', length: 100 })
	block_group_id: string;

	// ブロックグループ名称
	@Column({ type: 'varchar', length: 100 })
	block_group_name: string;


}