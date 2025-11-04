import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LzstockController } from './lzstock/lzstock.controller';
import { LzstockService } from './lzstock/lzstock.service';
import { LzstockModule } from './lzstock/lzstock.module';

@Module({
  imports: [LzstockModule,
    BullModule.forRoot({
      connection: {
        host:'localhost',
        port: 6379
      }
    }),
    BullModule.registerQueue({
      name:'bulk-insert'
    }),
  ],
  controllers: [AppController, LzstockController],
  providers: [AppService, LzstockService],
})
export class AppModule {}
