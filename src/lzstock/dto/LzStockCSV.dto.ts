import {IsArray, IsDateString, IsNumber, IsString} from 'class-validator';
/**
 * LZ在庫CSVデータ構造DTO
 */
export class CreateLzStockDto {

	// 契約者ID
	@IsString()
	contractor_id: string;
	
	// 契約者名
	@IsString()
	contractor_name: string;

	// 荷主ID
	@IsString()
	shipper_id: string;

	// 荷主名
	@IsString()
	shipper_name: string;

	// 倉庫ID
	@IsString()
	warehouse_id: string;

	// 倉庫名
	@IsString()
	warehouse_name: string;

	// ブロックID
	@IsString()
	block_id: string;

	// ブロック略称
	@IsString()
	block_short_name: string;

	// ロケーション
	@IsString()
	location: string;

	// 入荷日
	@IsDateString()
	arrival_date: String;

	// 商品ID
	@IsString()
	item_id: string;

	// 商品名
	@IsString()
	item_name: string;

	// 検索名称
	@IsString()
	item_search_name: string;

	// 品質区分ID
	@IsString()
	quality_div_id: string;

	// 品質区分
	@IsString()
	quality_div: string;

	// ロット
	@IsString()
	lot: string;

	// 有効期限
	@IsDateString()
	expiration_date: String;

	// 在庫キー1
	@IsString()
	stock_key_1: string;

	// 在庫キー1名称
	@IsString()
	stock_key_1_name: string;

	// 在庫キー2
	@IsString()
	stock_key_2: string;

	// 在庫キー2名称
	@IsString()
	stock_key_2_name: string;

	// 在庫キー3
	@IsString()
	stock_key_3: string;

	// 在庫キー3名称
	@IsString()
	stock_key_3_name: string;

	// 在庫キー4
	@IsString()
	stock_key_4: string;

	// 在庫キー4名称
	@IsString()
	stock_key_4_name: string;

	// 在庫数(引当数含む)
	@IsNumber()
	stock_qty: number;

	// 引当数
	@IsNumber()
	allocated_qty: number;

	// バーコード
	@IsString()
	barcode: string;

	// バラ
	@IsString()
	piece: string;

	// ボール
	@IsString()
	box: string;

	// ロケ引当条件
	@IsString()
	location_alloc_condition: string;

	// ロケ業務区分
	@IsString()
	location_business_div: string;

	// 取置取引先ID
	@IsString()
	reserved_customer_id: string;

	// 取置取引先名
	@IsString()
	reserved_customer_name: string;

	// 梱包形態
	@IsString()
	packaging_type: string;

	// 棚卸状況
	@IsString()
	inventory_stat: string;

	// 検索名称2
	@IsString()
	item_search_name_2: string;

	// 仕入単価
	@IsString()
	pur_unit_price: string;

	// 小売価格
	@IsString()
	retail_price: string;

	// 小売価格2
	@IsString()
	retail_price_2: string;

	// 小売価格3
	@IsString()
	retail_price_3: string;

	// 小売価格4
	@IsString()
	retail_price_4: string;

	// 大分類
	@IsString()
	large_classify: string;

	// 中分類
	@IsString()
	middle_classify: string;

	// 小分類
	@IsString()
	small_classify: string;

	// ロット管理フラグ
	@IsString()
	lot_manage_flg: string;

	// 有効期限区分
	@IsString()
	expiration_date_div: string;

	// 入荷日管理フラグ
	@IsString()
	arr_date_manage_flg: string;

	// 温度帯区分
	@IsString()
	temp_zone_div: string;

	// セット構成区分
	@IsString()
	set_structure_div: string;

	// 在庫区分
	@IsString()
	stock_div: string;

	// 引当不可日数
	@IsString()
	non_alloc_days: string;

	// 入荷期限日数
	@IsString()
	arrival_limit_days: string;

	// 商品予備項目001
	@IsString()
	item_reserve_001: string;

	// 商品予備項目002
	@IsString()
	item_reserve_002: string;

	// 商品予備項目003
	@IsString()
	item_reserve_003: string;

	// 商品予備項目004
	@IsString()
	item_reserve_004: string;

	// 商品予備項目005
	@IsString()
	item_reserve_005: string;

	// 商品予備項目006
	@IsString()
	item_reserve_006: string;

	// 商品予備項目007
	@IsString()
	item_reserve_007: string;

	// 商品予備項目008
	@IsString()
	item_reserve_008: string;

	// 商品予備項目009
	@IsString()
	item_reserve_009: string;

	// 商品予備項目010
	@IsString()
	item_reserve_010: string;

	// 部門ID
	@IsString()
	department_id: string;

	// 部門名
	@IsString()
	department_name: string;

	// 画像URL
	@IsString()
	image_url: string;

	// 英語名
	@IsString()
	english_name: string;

	// 重量
	@IsString()
	weight: string;

	// シリアル登録フラグ
	@IsString()
	serial_regist_flg: string;

	// HT検品対象除外フラグ
	@IsString()
	ht_inspect_exclude_flg: string;

	// 納品書出力対象除外フラグ
	@IsString()
	del_note_exclude_flg: string;

	// 発注点管理除外フラグ
	@IsString()
	order_point_exclude_flg: string;

	// 最終入荷日
	@IsDateString()
	last_arrival_date: String;

	// 最終出荷日
	@IsDateString()
	last_ship_date: String;

	// 縦_SKU単位
	@IsString()
	vertical_sku_unit: string;

	// 横_SKU単位
	@IsString()
	horizontal_sku_unit: string;

	// 高さ_SKU単位
	@IsString()
	height_sku_unit: string;

	// 仕入単価_SKU単位
	@IsString()
	pur_unit_price_sku_unit: string;

	// 小売単価_SKU単位
	@IsString()
	retail_price_sku_unit: string;

	// 小売単価2_SKU単位
	@IsString()
	retail_price_2_sku_unit: string;

	// 小売単価3_SKU単位
	@IsString()
	retail_price_3_sku_unit: string;

	// 小売単価4_SKU単位
	@IsString()
	retail_price_4_sku_unit: string;

	// 小売単価5_SKU単位
	@IsString()
	retail_price_5_sku_unit: string;

	// SKU予備項目001
	@IsString()
	sku_reserve_001: string;

	// SKU予備項目002
	@IsString()
	sku_reserve_002: string;

	// SKU予備項目003
	@IsString()
	sku_reserve_003: string;

	// SKU予備項目004
	@IsString()
	sku_reserve_004: string;

	// SKU予備項目005
	@IsString()
	sku_reserve_005: string;

	// SKU予備項目006
	@IsString()
	sku_reserve_006: string;

	// SKU予備項目007
	@IsString()
	sku_reserve_007: string;

	// SKU予備項目008
	@IsString()
	sku_reserve_008: string;

	// SKU予備項目009
	@IsString()
	sku_reserve_009: string;

	// SKU予備項目010
	@IsString()
	sku_reserve_010: string;

	// ブロックグループID
	@IsString()
	block_group_id: string;

	// ブロックグループ名称
	@IsString()
	block_group_name: string;

}