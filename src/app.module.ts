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

    // TypeORMモジュールの初期化
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Cwcd45ure',
      database: 'daijin_test',
      entities: [Lzstock],
      synchronize: false,
    }),
    LzstockModule,

    // 環境変数モジュールの初期化
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    // BullMQモジュールの初期化
    BullModule.forRoot({
      connection: {
        host:'localhost',
        port: 6379
      }
    }),
    
    // バルクインサートキューの登録
    BullModule.registerQueue({
      name:'bulk-insert'
    }),
    LzstockModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
