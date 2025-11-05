// src/lzstock/lzstock.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // ★ TypeORMのモジュールをインポート
import { BullModule } from '@nestjs/bullmq'; 

import { LzstockService } from './lzstock.service';
import { Lzstock } from './models/lzstock.entity'; // ★ Lzstock エンティティをインポート

@Module({
  imports: [
    // ★ 解決策: LzstockRepository を NestJS に提供するために必須 ★
    TypeOrmModule.forFeature([Lzstock]), 
    
    // Queue (インデックス [1]) の解決策も併せて記述
    BullModule.registerQueue({
        name: 'bulk-insert', // サービスで使用しているキュー名
    }),
  ],
  providers: [LzstockService], 
  exports: [LzstockService],
})
export class LzstockModule {}