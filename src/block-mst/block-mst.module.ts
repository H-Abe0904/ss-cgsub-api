import { Module } from '@nestjs/common';
import { BlockMstController } from './block-mst.controller';
import { BlockMstService } from './block-mst.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LzBlockMST } from './models';

@Module({
  imports: [
    TypeOrmModule.forFeature([LzBlockMST]),
  ],
  controllers: [BlockMstController],
  providers: [BlockMstService]
})
export class BlockMstModule {}
