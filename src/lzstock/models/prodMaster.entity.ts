import { Entity, PrimaryColumn, Column } from 'typeorm';

/**
 * 商品マスタデータ (dbmst_daijin_products) エンティティ定義
 *
 * 備考:
 * - 主キーとして 'コード' を使用しています。
 * - 数値型の精度 (precision, scale) は、一般的な要件に基づいて設定されています。
 * - DB側のデータ型に厳密に合わせるには、DBごとの詳細な型設定が必要です。
 */
@Entity('dbmst_daijin_products')
export class DaijinProduct {

    // コード (主キーとして設定)
    @PrimaryColumn({ type: 'varchar', length: 100, comment: '商品コード' })
    コード: string;

    // 検索カナ
    @Column({ type: 'varchar', length: 100, nullable: true })
    検索カナ: string;

    // 略称
    @Column({ type: 'varchar', length: 100, nullable: true })
    略称: string;

    // 印刷用コード
    @Column({ type: 'varchar', length: 100, nullable: true })
    印刷用コード: string;

    // 商品名_帳票
    @Column({ type: 'varchar', length: 100, nullable: true })
    商品名_帳票: string;

    // 商品名_正式
    @Column({ type: 'varchar', length: 100, nullable: true })
    商品名_正式: string;

    // 品番
    @Column({ type: 'varchar', length: 50, nullable: true })
    品番: string;

    // 規格
    @Column({ type: 'varchar', length: 50, nullable: true })
    規格: string;

    // 商品名_ｶﾅ
    @Column({ type: 'varchar', length: 100, nullable: true })
    商品名_ｶﾅ: string;

    // メーカー
    @Column({ type: 'varchar', length: 50, nullable: true })
    メーカー: string;

    // 品種
    @Column({ type: 'varchar', length: 100, nullable: true })
    品種: string;

    // カテゴリ
    @Column({ type: 'varchar', length: 50, nullable: true })
    カテゴリ: string;

    // 在庫品F
    @Column({ type: 'varchar', length: 50, nullable: true })
    在庫品F: string;

    // リンクF
    @Column({ type: 'varchar', length: 50, nullable: true })
    リンクF: string;

    // 記号
    @Column({ type: 'varchar', length: 50, nullable: true })
    記号: string;

    // 対象魚
    @Column({ type: 'varchar', length: 50, nullable: true })
    対象魚: string;

    // 部門コード
    @Column({ type: 'varchar', length: 50, nullable: true })
    部門コード: string;

    // バラ単位コード
    @Column({ type: 'varchar', length: 50, nullable: true })
    バラ単位コード: string;

    // ケース単位コード
    @Column({ type: 'varchar', length: 50, nullable: true })
    ケース単位コード: string;

    // ケース２単位コード
    @Column({ type: 'varchar', length: 50, nullable: true })
    ケース２単位コード: string;

    // ケース入数
    @Column({ type: 'varchar', length: 50, nullable: true }) // 数値だがvarchar指定のためstring
    ケース入数: string;

    // ケース２入数
    @Column({ type: 'varchar', length: 50, nullable: true }) // 数値だがvarchar指定のためstring
    ケース２入数: string;

    // 使用単価
    @Column({ type: 'varchar', length: 10, nullable: true }) // 数値だがvarchar指定のためstring
    使用単価: string;

    // ケース入数小数桁
    @Column({ type: 'varchar', length: 10, nullable: true }) // 数値だがvarchar指定のためstring
    ケース入数小数桁: string;

    // ケース箱数小数桁 (bigint)
    @Column({ type: 'bigint', nullable: true })
    ケース箱数小数桁: number;

    // ケース２入数小数桁 (tinyint UN)
    @Column({ type: 'int', nullable: true })
    ケース２入数小数桁: number;

    // ケース２箱数小数桁 (tinyint UN)
    @Column({ type: 'int', nullable: true })
    ケース２箱数小数桁: number;

    // 単価小数桁 (tinyint UN)
    @Column({ type: 'int', nullable: true })
    単価小数桁: number;

    // 数量小数桁 (tinyint UN)
    @Column({ type: 'int', nullable: true })
    数量小数桁: number;

    // 数量端数処理 (tinyint UN)
    @Column({ type: 'int', nullable: true })
    数量端数処理: number;

    // 金額端数桁 (tinyint UN)
    @Column({ type: 'int', nullable: true })
    金額端数桁: number;

    // 金額端数処理
    @Column({ type: 'varchar', length: 10, nullable: true })
    金額端数処理: string;

    // 消費税区分
    @Column({ type: 'varchar', length: 50, nullable: true })
    消費税区分: string;

    // 売上使用単価
    @Column({ type: 'varchar', length: 50, nullable: true })
    売上使用単価: string;

    // 売上使用単価取得順序
    @Column({ type: 'varchar', length: 50, nullable: true })
    売上使用単価取得順序: string;

    // 仕入使用単価
    @Column({ type: 'varchar', length: 50, nullable: true })
    仕入使用単価: string;

    // 仕入使用単価取得順序
    @Column({ type: 'varchar', length: 50, nullable: true })
    仕入使用単価取得順序: string;

    // 使用原単価
    @Column({ type: 'varchar', length: 50, nullable: true })
    使用原単価: string;

    // 使用原単価取得順序
    @Column({ type: 'varchar', length: 50, nullable: true })
    使用原単価取得順序: string;

    // バラ標準価格
    @Column({ type: 'varchar', length: 50, nullable: true })
    バラ標準価格: string;

    // ケース標準価格
    @Column({ type: 'varchar', length: 50, nullable: true })
    ケース標準価格: string;

    // ケース２標準価格 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    ケース２標準価格: number;

    // バラ原価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    バラ原価: number;

    // ケース原価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    ケース原価: number;

    // ケース２原価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    ケース２原価: number;

    // バラ売価１ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    バラ売価１: number;

    // ケース売価１ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    ケース売価１: number;

    // ケース２売価１ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    ケース２売価１: number;

    // バラ売価２ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    バラ売価２: number;

    // ケース売価２ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    ケース売価２: number;

    // ケース２売価２ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    ケース２売価２: number;

    // バラ売価３ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    バラ売価３: number;

    // ケース売価３ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    ケース売価３: number;

    // ケース２売価３ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    ケース２売価３: number;

    // バラ売価４ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    バラ売価４: number;

    // ケース売価４ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    ケース売価４: number;

    // ケース２売価４ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    ケース２売価４: number;

    // バラ売価５ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    バラ売価５: number;

    // ケース売価５ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    ケース売価５: number;

    // ケース２売価５ (varchar)
    @Column({ type: 'varchar', length: 100, nullable: true })
    ケース２売価５: string;

    // 在庫管理
    @Column({ type: 'varchar', length: 13, nullable: true })
    在庫管理: string;

    // 在庫単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    在庫単価: number;

    // 導入時在庫日付
    @Column({ type: 'varchar', length: 20, nullable: true })
    導入時在庫日付: string;

    // 導入時在庫数量
    @Column({ type: 'varchar', length: 50, nullable: true })
    導入時在庫数量: string;

    // 導入時在庫金額
    @Column({ type: 'varchar', length: 50, nullable: true })
    導入時在庫金額: string;

    // 主仕入先コード
    @Column({ type: 'varchar', length: 50, nullable: true })
    主仕入先コード: string;

    // 売上計算式コード
    @Column({ type: 'varchar', length: 10, nullable: true })
    売上計算式コード: string;

    // 仕入計算式コード
    @Column({ type: 'varchar', length: 10, nullable: true })
    仕入計算式コード: string;

    // 摘要
    @Column({ type: 'varchar', length: 100, nullable: true })
    摘要: string;

    // 汎用数値１ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    汎用数値１: number;

    // 汎用数値２ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    汎用数値２: number;

    // 汎用数値３ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    汎用数値３: number;

    // 汎用数値４ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    汎用数値４: number;

    // 汎用数値５ (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    汎用数値５: number;

    // 登録日
    @Column({ type: 'varchar', length: 50, nullable: true })
    登録日: string;

    // 更新日
    @Column({ type: 'varchar', length: 50, nullable: true })
    更新日: string;

    // 旧単価変更日付
    @Column({ type: 'varchar', length: 100, nullable: true })
    旧単価変更日付: string;

    // 現単価変更日付
    @Column({ type: 'varchar', length: 50, nullable: true })
    現単価変更日付: string;

    // 新単価変更日付
    @Column({ type: 'varchar', length: 100, nullable: true })
    新単価変更日付: string;

    // 長さ
    @Column({ type: 'varchar', length: 50, nullable: true })
    長さ: string;

    // 重さ強さ
    @Column({ type: 'varchar', length: 50, nullable: true })
    重さ強さ: string;

    // サイズ
    @Column({ type: 'varchar', length: 100, nullable: true })
    サイズ: string;

    // 色番号
    @Column({ type: 'varchar', length: 50, nullable: true })
    色番号: string;

    // 色
    @Column({ type: 'varchar', length: 200, nullable: true })
    色: string;

    // JANコード
    @Column({ type: 'varchar', length: 50, nullable: true })
    JANコード: string;

    // 有効期限
    @Column({ type: 'varchar', length: 100, nullable: true })
    有効期限: string;

    // 在庫評価方法
    @Column({ type: 'varchar', length: 50, nullable: true })
    在庫評価方法: string;

    // 消費税率
    @Column({ type: 'varchar', length: 50, nullable: true })
    消費税率: string;

    // 上代 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    上代: number;

    // 標準価格 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    標準価格: number;

    // 受注単位 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    受注単位: number;

    // 発注単位 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    発注単位: number;

    // 旧上代単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    旧上代単価: number;

    // 旧標準売上単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    旧標準売上単価: number;

    // 旧ランク１単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    旧ランク１単価: number;

    // 旧ランク２単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    旧ランク２単価: number;

    // 旧ランク３単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    旧ランク３単価: number;

    // 旧ランク４単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    旧ランク４単価: number;

    // 旧ランク５単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    旧ランク５単価: number;

    // 旧標準仕入単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    旧標準仕入単価: number;

    // 旧直送仕入単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    旧直送仕入単価: number;

    // 旧特例仕入単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    旧特例仕入単価: number;

    // 現上代単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    現上代単価: number;

    // 現標準売上単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    現標準売上単価: number;

    // 現ランク１単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    現ランク１単価: number;

    // 現ランク２単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    現ランク２単価: number;

    // 現ランク３単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    現ランク３単価: number;

    // 現ランク４単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    現ランク４単価: number;

    // 現ランク５単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    現ランク５単価: number;

    // 現標準仕入単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    現標準仕入単価: number;

    // 現直送仕入単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    現直送仕入単価: number;

    // 現特例仕入単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    現特例仕入単価: number;

    // 新上代単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    新上代単価: number;

    // 新標準売上単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    新標準売上単価: number;

    // 新ランク１単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    新ランク１単価: number;

    // 新ランク２単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    新ランク２単価: number;

    // 新ランク３単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    新ランク３単価: number;

    // 新ランク４単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    新ランク４単価: number;

    // 新ランク５単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    新ランク５単価: number;

    // 新標準仕入単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    新標準仕入単価: number;

    // 新直送仕入単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    新直送仕入単価: number;

    // 新特例仕入単価 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    新特例仕入単価: number;

    // 発注点下限 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    発注点下限: number;

    // 発注点上限 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    発注点上限: number;

    // 発注数量 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    発注数量: number;

    // 在庫補充点下限 (double)
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true })
    在庫補充点下限: number;

    // ﾒｰｶｰｺｰﾄﾞ
    @Column({ type: 'varchar', length: 50, nullable: true })
    ﾒｰｶｰｺｰﾄﾞ: string;

    // ﾒｰｶｰ名
    @Column({ type: 'varchar', length: 50, nullable: true })
    ﾒｰｶｰ名: string;

    // ｶﾃｺﾞﾘｺｰﾄﾞ
    @Column({ type: 'varchar', length: 50, nullable: true })
    ｶﾃｺﾞﾘｺｰﾄﾞ: string;

    // ｶﾃｺﾞﾘ名
    @Column({ type: 'varchar', length: 100, nullable: true })
    ｶﾃｺﾞﾘ名: string;
}