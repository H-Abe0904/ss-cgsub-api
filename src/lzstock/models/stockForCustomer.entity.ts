import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  name: 'vrwrk_purpose_workstock', // 実際のDB上のビュー名
})
export class stockForCustomer {
  // ビューには PrimaryColumn は使いません。すべて ViewColumn にします。
  @ViewColumn({ name: '商品コード' })
  商品コード: string;
  
  @ViewColumn({ name: '商品名_帳票' })
  商品名_帳票: string;

  @ViewColumn({ name: 'ﾒｰｶｰ名' })
  ﾒｰｶｰ名: string;

  @ViewColumn({ name: '在庫数_引当数含む' })
  在庫数_引当数含む: number;

  @ViewColumn({ name: '売上残数' })
  売上残数: number;

  @ViewColumn({ name: '有効在庫数' })
  有効在庫数: number;
}