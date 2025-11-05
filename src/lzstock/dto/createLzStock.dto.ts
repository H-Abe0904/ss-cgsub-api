
/**
 * LZ在庫登録DTO
 */
export class CreateLzStockDto {
	// 契約者ID
	contractor_id: string;
	
	// 契約者名
	contractor_name: string;

	// 荷主ID
	shipper_id: string;

	// 荷主名
	shipper_name: string;

	// 倉庫ID
	warehouse_id: string;

	// 倉庫名
	warehouse_name: string;

	// ブロックID
	block_id: string;

	// ブロック略称
	block_short_name: string;

	// ロケーション
	location: string;

	// 入荷日
	arrival_date: String;

	// 商品ID
	item_id: string;

	// 商品名
	item_name: string;

	// 検索名称
	item_search_name: string;

	// 品質区分ID
	quality_div_id: string;

	// 品質区分
	quality_div: string;

	// ロット
	lot: string;

	// 有効期限
	expiration_date: String;

	// 在庫キー1
	stock_key_1: string;

	// 在庫キー1名称
	stock_key_1_name: string;

	// 在庫キー2
	stock_key_2: string;

	// 在庫キー2名称
	stock_key_2_name: string;

	// 在庫キー3
	stock_key_3: string;

	// 在庫キー3名称
	stock_key_3_name: string;

	// 在庫キー4
	stock_key_4: string;

	// 在庫キー4名称
	stock_key_4_name: string;

	// 在庫数(引当数含む)
	stock_qty: number;

	// 引当数
	allocated_qty: number;

	// バーコード
	barcode: string;

	// バラ
	piece: string;

	// ボール
	box: string;

	// ロケ引当条件
	location_alloc_condition: string;

	// ロケ業務区分
	location_business_div: string;

	// 取置取引先ID
	reserved_customer_id: string;

	// 取置取引先名
	reserved_customer_name: string;

	// 梱包形態
	packaging_type: string;

	// 棚卸状況
	inventory_stat: string;

	// 検索名称2
	item_search_name_2: string;

	// 仕入単価
	pur_unit_price: string;

	// 小売価格
	retail_price: string;

	// 小売価格2
	retail_price_2: string;

	// 小売価格3
	retail_price_3: string;

	// 小売価格4
	retail_price_4: string;

	// 大分類
	large_classify: string;

	// 中分類
	middle_classify: string;

	// 小分類
	small_classify: string;

	// ロット管理フラグ
	lot_manage_flg: string;

	// 有効期限区分
	expiration_date_div: string;

	// 入荷日管理フラグ
	arr_date_manage_flg: string;

	// 温度帯区分
	temp_zone_div: string;

	// セット構成区分
	set_structure_div: string;

	// 在庫区分
	stock_div: string;

	// 引当不可日数
	non_alloc_days: string;

	// 入荷期限日数
	arrival_limit_days: string;

	// 商品予備項目001
	item_reserve_001: string;

	// 商品予備項目002
	item_reserve_002: string;

	// 商品予備項目003
	item_reserve_003: string;

	// 商品予備項目004
	item_reserve_004: string;

	// 商品予備項目005
	item_reserve_005: string;

	// 商品予備項目006
	item_reserve_006: string;

	// 商品予備項目007
	item_reserve_007: string;

	// 商品予備項目008
	item_reserve_008: string;

	// 商品予備項目009
	item_reserve_009: string;

	// 商品予備項目010
	item_reserve_010: string;

	// 部門ID
	department_id: string;

	// 部門名
	department_name: string;

	// 画像URL
	image_url: string;

	// 英語名
	english_name: string;

	// 重量
	weight: string;

	// シリアル登録フラグ
	serial_regist_flg: string;

	// HT検品対象除外フラグ
	ht_inspect_exclude_flg: string;

	// 納品書出力対象除外フラグ
	del_note_exclude_flg: string;

	// 発注点管理除外フラグ
	order_point_exclude_flg: string;

	// 最終入荷日
	last_arrival_date: String;

	// 最終出荷日
	last_ship_date: String;

	// 縦_SKU単位
	vertical_sku_unit: string;

	// 横_SKU単位
	horizontal_sku_unit: string;

	// 高さ_SKU単位
	height_sku_unit: string;

	// 仕入単価_SKU単位
	pur_unit_price_sku_unit: string;

	// 小売単価_SKU単位
	retail_price_sku_unit: string;

	// 小売単価2_SKU単位
	retail_price_2_sku_unit: string;

	// 小売単価3_SKU単位
	retail_price_3_sku_unit: string;

	// 小売単価4_SKU単位
	retail_price_4_sku_unit: string;

	// 小売単価5_SKU単位
	retail_price_5_sku_unit: string;

	// SKU予備項目001
	sku_reserve_001: string;

	// SKU予備項目002
	sku_reserve_002: string;

	// SKU予備項目003
	sku_reserve_003: string;

	// SKU予備項目004
	sku_reserve_004: string;

	// SKU予備項目005
	sku_reserve_005: string;

	// SKU予備項目006
	sku_reserve_006: string;

	// SKU予備項目007
	sku_reserve_007: string;

	// SKU予備項目008
	sku_reserve_008: string;

	// SKU予備項目009
	sku_reserve_009: string;

	// SKU予備項目010
	sku_reserve_010: string;

	// ブロックグループID
	block_group_id: string;

	// ブロックグループ名称
	block_group_name: string;

}