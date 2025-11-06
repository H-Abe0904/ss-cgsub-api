import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // ★ TypeORMのモジュールをインポート
import { BullModule } from '@nestjs/bullmq'; 
import { LzstockController } from './lzstock.controller';
import { LzstockService } from './lzstock.service';
import { LzstockProcessor } from './lzstock.processor';
import { Lzstock } from './models/lzstock.entity'; // ★ Lzstock エンティティをインポート

@Module({
  imports: [
    TypeOrmModule.forFeature([Lzstock]),  // ★ Lzstock エンティティをTypeORMモジュールに登録
    
    //  バルクインサートキューの登録
    BullModule.registerQueue({
        name: 'bulk-insert', // サービスで使用しているキュー名
    }),
  ],
  controllers: [LzstockController], // コントローラーを登録
  providers: [LzstockService,LzstockProcessor], // サービスをプロバイダーとして登録
  exports: [LzstockService],   // 他のモジュールで使用できるようにエクスポート
})
export class LzstockModule {}