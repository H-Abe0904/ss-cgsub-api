import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // ★ TypeORMのモジュールをインポート
import { LzstockController } from './lzstock.controller';
import { LzstockService } from './lzstock.service';
import { Lzstock, availableStock } from './models'; // ★ Lzstock エンティティをインポート

@Module({
  imports: [

    TypeOrmModule.forFeature([Lzstock, availableStock]),    

  ],
  controllers: [LzstockController], 
  providers: [LzstockService], // サービスをプロバイダーとして登録
  exports: [LzstockService],   // 他のモジュールで使用できるようにエクスポート
})
export class LzstockModule {}