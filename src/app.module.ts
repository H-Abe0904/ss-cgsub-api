import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LzstockController } from './lzstock/lzstock.controller';
import { LzstockService } from './lzstock/lzstock.service';
import { LzstockModule } from './lzstock/lzstock.module';
import { Lzstock } from './lzstock/models/lzstock.entity';
import { BlockMstModule } from '../src/block-mst/block-mst.module';
import { LzBlockMST } from './block-mst/models';
import { stockForCustomer } from './lzstock/models';
import { StockForCustomerDto } from './lzstock/dto';

/**
 * アプリケーションのメインモジュールクラス
 */
@Module({
  imports: [
    LzstockModule,
    BlockMstModule,
    stockForCustomer,

    // TypeORMモジュールの初期化
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Cwcd45ure',
      database: 'daijin_test',
      entities: [Lzstock,LzBlockMST,stockForCustomer],
      synchronize: false,
    }),
    // LzstockModule,BlockMstModule,

    // 環境変数モジュールの初期化
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // LzstockModule,
    // BlockMstModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
