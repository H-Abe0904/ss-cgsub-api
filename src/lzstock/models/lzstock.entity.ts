import type from "os";
import {
	BeforeInsert,
	Column,
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
	PrimaryColumn
} from "typeorm";

/**
 * WMS在庫CSVデータのエンティティクラス
 */
@Entity({ name: "dbwrk_lz_stock" })
export class Lzstock {
	  // 契約者ID
    @Column({ type: 'varchar', length: 100, nullable: true })
    契約者ID: string;

    // 契約者名
    @Column({ type: 'varchar', length: 100, nullable: true })
    契約者名: string;

    // 荷主ID
    @Column({ type: 'varchar', length: 100, nullable: true })
    荷主ID: string;

    // 荷主名
    @Column({ type: 'varchar', length: 10, nullable: true })
    荷主名: string;

    // 倉庫ID
    @Column({ type: 'varchar', length: 100, nullable: true })
    倉庫ID: string;

    // 倉庫名
    @Column({ type: 'varchar', length: 100, nullable: true })
    倉庫名: string;

    // ブロックID
    @Column({ type: 'varchar', length: 100, nullable: true })
    ブロックID: string;

    // ブロック略称
    @Column({ type: 'varchar', length: 100, nullable: true })
    ブロック略称: string;

    // ロケーション
    @Column({ type: 'varchar', length: 8, nullable: true })
    ロケーション: string;

    // 入荷日
    @Column({ type: 'varchar', length: 100, nullable: true })
    入荷日: string;

    // 商品ID
    @Column({ type: 'varchar', length: 13, nullable: true })
    商品ID: string;

    // 商品名
    @Column({ type: 'varchar', length: 100, nullable: true })
    商品名: string;

    // 検索名称
    @Column({ type: 'varchar', length: 100, nullable: true })
    検索名称: string;

    // 品質区分ID
    @Column({ type: 'varchar', length: 100, nullable: true })
    品質区分ID: string;

    // 品質区分
    @Column({ type: 'varchar', length: 100, nullable: true })
    品質区分: string;

    // ロット
    @Column({ type: 'varchar', length: 10, nullable: true })
    ロット: string;

    // 有効期限
    @Column({ type: 'varchar', length: 20, nullable: true })
    有効期限: string;

    // 在庫キー1
    @Column({ type: 'varchar', length: 100, nullable: true })
    在庫キー1: string;

    // 在庫キー1名称
    @Column({ type: 'varchar', length: 100, nullable: true })
    在庫キー1名称: string;

    // 在庫キー2
    @Column({ type: 'varchar', length: 100, nullable: true })
    在庫キー2: string;

    // 在庫キー2名称
    @Column({ type: 'varchar', length: 100, nullable: true })
    在庫キー2名称: string;

    // 在庫キー3
    @Column({ type: 'varchar', length: 100, nullable: true })
    在庫キー3: string;

    // 在庫キー3名称
    @Column({ type: 'varchar', length: 100, nullable: true })
    在庫キー3名称: string;

    // 在庫キー4
    @Column({ type: 'varchar', length: 100, nullable: true })
    在庫キー4: string;

    // 在庫キー4名称
    @Column({ type: 'varchar', length: 100, nullable: true })
    在庫キー4名称: string;

    // 在庫数(引当数含む)
    @Column({ name: '在庫数_引当数含む', type: 'int', length: 100, nullable: true })
    在庫数_引当数含む: number;

    // 引当数
    @Column({ type: 'int', length: 100, nullable: true })
    引当数: number;

    // バーコード
    @PrimaryColumn({ type: 'varchar', length: 13, nullable:false })
    バーコード: string;

    // バラ
    @Column({ type: 'varchar', length: 100, nullable: true })
    バラ: string;

    // ボール
    @Column({ type: 'varchar', length: 100, nullable: true })
    ボール: string;

    // ロケ引当条件
    @Column({ type: 'varchar', length: 100, nullable: true })
    ロケ引当条件: string;

    // ロケ業務区分
    @Column({ type: 'varchar', length: 100, nullable: true })
    ロケ業務区分: string;

    // 取置取引先ID
    @Column({ type: 'varchar', length: 100, nullable: true })
    取置取引先ID: string;

    // 取置取引先名
    @Column({ type: 'varchar', length: 100, nullable: true })
    取置取引先名: string;

    // 梱包形態
    @Column({ type: 'varchar', length: 100, nullable: true })
    梱包形態: string;

    // 棚卸状況
    @Column({ type: 'varchar', length: 100, nullable: true })
    棚卸状況: string;

    // 検索名称2
    @Column({ type: 'varchar', length: 100, nullable: true })
    検索名称2: string;

    // 仕入単価
    @Column({ type: 'varchar', length: 100, nullable: true })
    仕入単価: string;

    // 小売価格
    @Column({ type: 'varchar', length: 100, nullable: true })
    小売価格: string;

    // 小売価格2
    @Column({ type: 'varchar', length: 100, nullable: true })
    小売価格2: string;

    // 小売価格3
    @Column({ type: 'varchar', length: 100, nullable: true })
    小売価格3: string;

    // 小売価格4
    @Column({ type: 'varchar', length: 100, nullable: true })
    小売価格4: string;

    // 大分類
    @Column({ type: 'varchar', length: 50, nullable: true })
    大分類: string;

    // 中分類
    @Column({ type: 'varchar', length: 50, nullable: true })
    中分類: string;

    // 小分類
    @Column({ type: 'varchar', length: 50, nullable: true })
    小分類: string;

    // ロット管理フラグ
    @Column({ type: 'varchar', length: 10, nullable: true })
    ロット管理フラグ: string;

    // 有効期限区分
    @Column({ type: 'varchar', length: 5, nullable: true })
    有効期限区分: string;

    // 入荷日管理フラグ
    @Column({ type: 'varchar', length: 100, nullable: true })
    入荷日管理フラグ: string;

    // 温度帯区分
    @Column({ type: 'varchar', length: 100, nullable: true })
    温度帯区分: string;

    // セット構成区分
    @Column({ type: 'varchar', length: 100, nullable: true })
    セット構成区分: string;

    // 在庫区分
    @Column({ type: 'varchar', length: 100, nullable: true })
    在庫区分: string;

    // 引当不可日数
    @Column({ type: 'varchar', length: 100, nullable: true })
    引当不可日数: string;

    // 入荷期限日数
    @Column({ type: 'varchar', length: 100, nullable: true })
    入荷期限日数: string;

    // 商品予備項目001
    @Column({ type: 'varchar', length: 100, nullable: true })
    商品予備項目001: string;

    // 商品予備項目002
    @Column({ type: 'varchar', length: 100, nullable: true })
    商品予備項目002: string;

    // 商品予備項目003
    @Column({ type: 'varchar', length: 100, nullable: true })
    商品予備項目003: string;

    // 商品予備項目004
    @Column({ type: 'varchar', length: 100, nullable: true })
    商品予備項目004: string;

    // 商品予備項目005
    @Column({ type: 'varchar', length: 100, nullable: true })
    商品予備項目005: string;

    // 商品予備項目006
    @Column({ type: 'varchar', length: 100, nullable: true })
    商品予備項目006: string;

    // 商品予備項目007
    @Column({ type: 'varchar', length: 100, nullable: true })
    商品予備項目007: string;

    // 商品予備項目008
    @Column({ type: 'varchar', length: 100, nullable: true })
    商品予備項目008: string;

    // 商品予備項目009
    @Column({ type: 'varchar', length: 100, nullable: true })
    商品予備項目009: string;

    // 商品予備項目010
    @Column({ type: 'varchar', length: 100, nullable: true })
    商品予備項目010: string;

    // 部門ID
    @Column({ type: 'varchar', length: 50, nullable: true })
    部門ID: string;

    // 部門名
    @Column({ type: 'varchar', length: 100, nullable: true })
    部門名: string;

    // 画像URL
    @Column({ type: 'varchar', length: 100, nullable: true })
    画像URL: string;

    // 英語名
    @Column({ type: 'varchar', length: 100, nullable: true })
    英語名: string;

    // 重量
    @Column({ type: 'varchar', length: 100, nullable: true })
    重量: string;

    // シリアル登録フラグ
    @Column({ type: 'varchar', length: 100, nullable: true })
    シリアル登録フラグ: string;

    // HT検品対象除外フラグ
    @Column({ type: 'varchar', length: 100, nullable: true })
    HT検品対象除外フラグ: string;

    // 納品書出力対象除外ファイル (DBカラム名: 納品書出力対象除外ファイル, プロパティ名: 納品書出力対象除外フラグ)
    // NOTE: フィールド名に合わせ 'ファイル' を使いますが、意味的には 'フラグ' と考えられます。
    @Column({ type: 'varchar', length: 100, nullable: true })
    納品書出力対象除外フラグ: string;

    // 発注点管理除外フラグ
    @Column({ type: 'varchar', length: 100, nullable: true })
    発注点管理除外フラグ: string;

    // 最終入荷日
    @Column({ type: 'varchar', length: 100, nullable: true })
    最終入荷日: string;

    // 最終出荷日
    @Column({ type: 'varchar', length: 100, nullable: true })
    最終出荷日: string;

    // 縦_SKU単位
    @Column({ type: 'varchar', length: 100, nullable: true })
    縦_SKU単位: string;

    // 横_SKU単位
    @Column({ type: 'varchar', length: 100, nullable: true })
    横_SKU単位: string;

    // 高さ_SKU単位
    @Column({ type: 'varchar', length: 100, nullable: true })
    高さ_SKU単位: string;

    // 仕入単価_SKU単位
    @Column({ type: 'varchar', length: 100, nullable: true })
    仕入単価_SKU単位: string;

    // 小売価格_SKU単位
    @Column({ type: 'varchar', length: 100, nullable: true })
    小売価格_SKU単位: string;

    // 小売価格2_SKU単位
    @Column({ type: 'varchar', length: 100, nullable: true })
    小売価格2_SKU単位: string;

    // 小売価格3_SKU単位
    @Column({ type: 'varchar', length: 100, nullable: true })
    小売価格3_SKU単位: string;

    // 小売価格4_SKU単位
    @Column({ type: 'varchar', length: 100, nullable: true })
    小売価格4_SKU単位: string;

    // 小売価格5_SKU単位
    @Column({ type: 'varchar', length: 100, nullable: true })
    小売価格5_SKU単位: string;

    // SKU予備項目001
    @Column({ type: 'varchar', length: 100, nullable: true })
    SKU予備項目001: string;

    // SKU予備項目002
    @Column({ type: 'varchar', length: 100, nullable: true })
    SKU予備項目002: string;

    // SKU予備項目003
    @Column({ type: 'varchar', length: 100, nullable: true })
    SKU予備項目003: string;

    // SKU予備項目004
    @Column({ type: 'varchar', length: 100, nullable: true })
    SKU予備項目004: string;

    // SKU予備項目005
    @Column({ type: 'varchar', length: 100, nullable: true })
    SKU予備項目005: string;

    // SKU予備項目006
    @Column({ type: 'varchar', length: 100, nullable: true })
    SKU予備項目006: string;

    // SKU予備項目007
    @Column({ type: 'varchar', length: 100, nullable: true })
    SKU予備項目007: string;

    // SKU予備項目008
    @Column({ type: 'varchar', length: 100, nullable: true })
    SKU予備項目008: string;

    // SKU予備項目009
    @Column({ type: 'varchar', length: 100, nullable: true })
    SKU予備項目009: string;

    // SKU予備項目010
    @Column({ type: 'varchar', length: 100, nullable: true })
    SKU予備項目010: string;

    // ブロックグループID
    @Column({ type: 'varchar', length: 100, nullable: true })
    ブロックグループID: string;

    // ブロックグループ名称
    @Column({ type: 'varchar', length: 100, nullable: true })
    ブロックグループ名称: string;
}