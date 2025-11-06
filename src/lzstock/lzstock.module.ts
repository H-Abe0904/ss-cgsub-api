// src/lzstock/lzstock.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // ★ TypeORMのモジュールをインポート
import { BullModule } from '@nestjs/bullmq'; 

import { LzstockService } from './lzstock.service';
import { Lzstock } from './models/lzstock.entity'; // ★ Lzstock エンティティをインポート

@Module({
  imports: [
    TypeOrmModule.forFeature([Lzstock]),  // ★ Lzstock エンティティをTypeORMモジュールに登録
    
    //  バルクインサートキューの登録
    BullModule.registerQueue({
        name: 'bulk-insert', // サービスで使用しているキュー名
    }),
  ],
  providers: [LzstockService], // サービスをプロバイダーとして登録
  exports: [LzstockService],   // 他のモジュールで使用できるようにエクスポート
})
export class LzstockModule {}