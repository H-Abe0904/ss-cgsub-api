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

/**
 * アプリケーションのメインモジュールクラス
 */
@Module({
  imports: [
    LzstockModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'Admin',
      password: 'Cwcd45ure',
      database: 'daijin_stock',
      entities: [Lzstock],
      synchronize: false,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BullModule.forRoot({
      connection: {
        host:'localhost',
        port: 6379
      }
    }),
    /**
     * バルクインサートキューの登録
     */
    BullModule.registerQueue({
      name:'bulk-insert'
    }),
  ],
  controllers: [AppController, LzstockController],
  providers: [AppService, LzstockService],
})
export class AppModule {}
