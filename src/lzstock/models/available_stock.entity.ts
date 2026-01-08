import { Entity, Column, Index, PrimaryColumn } from 'typeorm';

@Entity('vrwrk_purpose_workstock')
export class availableStock{

    @PrimaryColumn({ type: 'varchar', length: 13, comment: 'バーコード' })
    商品コード: string;
    
    @Column({ type: 'varchar', length: 100, nullable: true, comment: '商品名' })
    商品名_帳票: string;

    @Column({ type: 'varchar', length: 3, nullable: true, comment: 'ブロック略称' })
    ﾒｰｶｰ名: string;

    @Column({ type: 'int', nullable: true, comment: 'WMS在庫数' })
    在庫数_引当数含む: number;

    @Column({ type: 'int', nullable: true, comment: '受注残数' })
    受注残数: number;

    @Column({type: 'int', nullable: true, comment: '在庫情報算出対象フラグ'})
    売上残数: number;

    @Column({ type: 'int', nullable: true, comment: '有効在庫数' })
    有効在庫数: number;
}