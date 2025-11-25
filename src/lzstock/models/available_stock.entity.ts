import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('vrwrk_ec_stock')
export class availableStock{

    @Column({ type: 'varchar', length: 13, nullable: true, comment: 'バーコード' })
    バーコード: string;
    
    @Column({ type: 'varchar', length: 100, nullable: true, comment: '商品名' })
    商品名: string;

    @Column({ type: 'varchar', length: 3, nullable: true, comment: 'ブロック略称' })
    ブロック略称: string;

    @Column({ type: 'int', nullable: true, comment: 'WMS在庫数' })
    WMS在庫数: number;

    @Column({ type: 'int', nullable: true, comment: '受注残数' })
    受注残数: number;

    @Column({type: 'int', nullable: true, comment: '在庫情報算出対象フラグ'})
    在庫情報算出対象フラグ: number;

    @Column({ type: 'int', nullable: true, comment: '有効在庫数' })
    有効在庫数: number;
}