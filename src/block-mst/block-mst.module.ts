import { Module } from '@nestjs/common';
import { BlockMstController } from './block-mst.controller';
import { BlockMstService } from './block-mst.service';

@Module({
  controllers: [BlockMstController],
  providers: [BlockMstService]
})
export class BlockMstModule {}
