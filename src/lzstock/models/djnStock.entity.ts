import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

/**
 * ERP在庫管理データ エンティティ定義
 *
 * CSVインポートのフィールド名とデータベースのカラムをマッピングします。
 * * 備考:
 * - 複合キーやインデックスが必要な場合は、適宜 @Index() デコレータを追加してください。
 * - 数値型の精度 (precision, scale) は、実際のビジネス要件に合わせて調整してください。
 */
@Entity('dbwrk_daijin_stock')
export class DjnStock {

    // 倉庫コード
    @Column({ type: 'varchar', length: 50, nullable: true, comment: '倉庫コード' })
    CD_Warehouse: string;

    // 商品コード
    @Column({ type: 'varchar', length: 13, nullable: true, comment: '商品コード' })
    CD_Product: string;

    // 棚卸導入日
    @Column({ type: 'date', nullable: true, comment: '棚卸導入日' })
    Date_INV_Taking_Intro: Date | null;

    // 棚卸導入数量
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true, default: 0, comment: '棚卸導入数量' })
    Qty_INV_Taking_Intro: number;

    // 警告在庫数量
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true, default: 0, comment: '警告在庫数量' })
    Qty_AlertStock: number;

    // 仕入先コード
    @Column({ type: 'varchar', length: 50, nullable: true, comment: '仕入先コード' })
    CD_Supplier: string;

    // 備考
    @Column({ type: 'varchar', length: 100, nullable: true, comment: '備考' })
    Remarks: string;

    // 現在在庫数量
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true, default: 0, comment: '現在在庫数量' })
    Qty_CurrentStock: number;

    // 出荷不可数量
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true, default: 0, comment: '出荷不可数量' })
    Qty_UnacceptShip: number;

    // 検品保留数量
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true, default: 0, comment: '検品保留数量' })
    Qty_PendingInsp: number;

    // 受注残数量
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true, default: 0, comment: '受注残数量 (Back Orders)' })
    Qty_BackOrders: number;

    // 発注残数量
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true, default: 0, comment: '発注残数量 (Order Backlogs)' })
    Qty_OrderBacklogs: number;

    // TBC受注残数量
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true, default: 0, comment: 'TBC受注残数量' })
    Qty_TBC_BackOrders: number;

    // TBC発注残数量
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true, default: 0, comment: 'TBC発注残数量' })
    Qty_TBC_OrderBacklogs: number;

    // 出荷残数量
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true, default: 0, comment: '出荷残数量' })
    Qty_RemainingShipReq: number;

    // 未処理購入要求数量
    @Column({ type: 'decimal', precision: 18, scale: 4, nullable: true, default: 0, comment: '未処理購入要求数量' })
    Qty_OutstandingPurReq: number;

    // ロケーションコード
    @Column({ type: 'varchar', length: 50, nullable: true, comment: 'ロケーションコード' })
    CD_Location: string;
}