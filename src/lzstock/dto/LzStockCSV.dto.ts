import {IsArray, IsDateString, IsNumber, IsString} from 'class-validator';
/**
 * LZ在庫CSVデータ構造DTO
 */
export class CreateLzStockDto {

   // 契約者ID
    @IsString()
    契約者ID: string;

    // 契約者名
    @IsString()
    契約者名: string;

    // 荷主ID
    @IsString()
    荷主ID: string;

    // 荷主名
    @IsString()
    荷主名: string;

    // 倉庫ID
    @IsString()
    倉庫ID: string;

    // 倉庫名
    @IsString()
    倉庫名: string;

    // ブロックID
    @IsString()
    ブロックID: string;

    // ブロック略称
    @IsString()
    ブロック略称: string;

    // ロケーション
    @IsString()
    ロケーション: string;

    // 入荷日
    @IsDateString()
    入荷日: string;

    // 商品ID
    @IsString()
    商品ID: string;

    // 商品名
    @IsString()
    商品名: string;

    // 検索名称
    @IsString()
    検索名称: string;

    // 品質区分ID
    @IsString()
    品質区分ID: string;

    // 品質区分
    @IsString()
    品質区分: string;

    // ロット
    @IsString()
    ロット: string;

    // 有効期限
    @IsDateString()
    有効期限: string;

    // 在庫キー1
    @IsString()
    在庫キー1: string;

    // 在庫キー1名称
    @IsString()
    在庫キー1名称: string;

    // 在庫キー2
    @IsString()
    在庫キー2: string;

    // 在庫キー2名称
    @IsString()
    在庫キー2名称: string;

    // 在庫キー3
    @IsString()
    在庫キー3: string;

    // 在庫キー3名称
    @IsString()
    在庫キー3名称: string;

    // 在庫キー4
    @IsString()
    在庫キー4: string;

    // 在庫キー4名称
    @IsString()
    在庫キー4名称: string;

    // 在庫数_引当数含む (スキーマ名に修正)
    @IsNumber()
    在庫数_引当数含む: number;

    // 引当数
    @IsNumber()
    引当数: number;

    // バーコード
    @IsString()
    バーコード: string;

    // バラ
    @IsString()
    バラ: string;

    // ボール
    @IsString()
    ボール: string;

    // ロケ引当条件
    @IsString()
    ロケ引当条件: string;

    // ロケ業務区分
    @IsString()
    ロケ業務区分: string;

    // 取置取引先ID
    @IsString()
    取置取引先ID: string;

    // 取置取引先名
    @IsString()
    取置取引先名: string;

    // 梱包形態
    @IsString()
    梱包形態: string;

    // 棚卸状況
    @IsString()
    棚卸状況: string;

    // 検索名称2
    @IsString()
    検索名称2: string;

    // 仕入単価
    @IsString()
    仕入単価: string;

    // 小売価格
    @IsString()
    小売価格: string;

    // 小売価格2
    @IsString()
    小売価格2: string;

    // 小売価格3
    @IsString()
    小売価格3: string;

    // 小売価格4
    @IsString()
    小売価格4: string;

    // 大分類
    @IsString()
    大分類: string;

    // 中分類
    @IsString()
    中分類: string;

    // 小分類
    @IsString()
    小分類: string;

    // ロット管理フラグ
    @IsString()
    ロット管理フラグ: string;

    // 有効期限区分
    @IsString()
    有効期限区分: string;

    // 入荷日管理フラグ
    @IsString()
    入荷日管理フラグ: string;

    // 温度帯区分
    @IsString()
    温度帯区分: string;

    // セット構成区分
    @IsString()
    セット構成区分: string;

    // 在庫区分
    @IsString()
    在庫区分: string;

    // 引当不可日数
    @IsString()
    引当不可日数: string;

    // 入荷期限日数
    @IsString()
    入荷期限日数: string;

    // 商品予備項目001
    @IsString()
    商品予備項目001: string;

    // 商品予備項目002
    @IsString()
    商品予備項目002: string;

    // 商品予備項目003
    @IsString()
    商品予備項目003: string;

    // 商品予備項目004
    @IsString()
    商品予備項目004: string;

    // 商品予備項目005
    @IsString()
    商品予備項目005: string;

    // 商品予備項目006
    @IsString()
    商品予備項目006: string;

    // 商品予備項目007
    @IsString()
    商品予備項目007: string;

    // 商品予備項目008
    @IsString()
    商品予備項目008: string;

    // 商品予備項目009
    @IsString()
    商品予備項目009: string;

    // 商品予備項目010
    @IsString()
    商品予備項目010: string;

    // 部門ID
    @IsString()
    部門ID: string;

    // 部門名
    @IsString()
    部門名: string;

    // 画像URL
    @IsString()
    画像URL: string;

    // 英語名
    @IsString()
    英語名: string;

    // 重量
    @IsString()
    重量: string;

    // シリアル登録フラグ
    @IsString()
    シリアル登録フラグ: string;

    // HT検品対象除外フラグ
    @IsString()
    HT検品対象除外フラグ: string;

    // 納品書出力対象除外ファイル (元のスキーマ名に修正)
    @IsString()
    納品書出力対象除外フラグ: string;

    // 発注点管理除外フラグ
    @IsString()
    発注点管理除外フラグ: string;

    // 最終入荷日
    @IsDateString()
    最終入荷日: string;

    // 最終出荷日
    @IsDateString()
    最終出荷日: string;

    // 縦_SKU単位
    @IsString()
    縦_SKU単位: string;

    // 横_SKU単位
    @IsString()
    横_SKU単位: string;

    // 高さ_SKU単位
    @IsString()
    高さ_SKU単位: string;

    // 仕入単価_SKU単位
    @IsString()
    仕入単価_SKU単位: string;

    // 小売価格_SKU単位 (元のスキーマ名に修正)
    @IsString()
    小売価格_SKU単位: string;

    // 小売価格2_SKU単位 (元のスキーマ名に修正)
    @IsString()
    小売価格2_SKU単位: string;

    // 小売価格3_SKU単位 (元のスキーマ名に修正)
    @IsString()
    小売価格3_SKU単位: string;

    // 小売価格4_SKU単位 (元のスキーマ名に修正)
    @IsString()
    小売価格4_SKU単位: string;

    // 小売価格5_SKU単位 (元のスキーマ名に修正)
    @IsString()
    小売価格5_SKU単位: string;

    // SKU予備項目001
    @IsString()
    SKU予備項目001: string;

    // SKU予備項目002
    @IsString()
    SKU予備項目002: string;

    // SKU予備項目003
    @IsString()
    SKU予備項目003: string;

    // SKU予備項目004
    @IsString()
    SKU予備項目004: string;

    // SKU予備項目005
    @IsString()
    SKU予備項目005: string;

    // SKU予備項目006
    @IsString()
    SKU予備項目006: string;

    // SKU予備項目007
    @IsString()
    SKU予備項目007: string;

    // SKU予備項目008
    @IsString()
    SKU予備項目008: string;

    // SKU予備項目009
    @IsString()
    SKU予備項目009: string;

    // SKU予備項目010
    @IsString()
    SKU予備項目010: string;

    // ブロックグループID
    @IsString()
    ブロックグループID: string;

    // ブロックグループ名称
    @IsString()
    ブロックグループ名称: string;

}