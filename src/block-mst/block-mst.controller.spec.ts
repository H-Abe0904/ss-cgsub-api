import { Test, TestingModule } from '@nestjs/testing';
import { BlockMstController } from './block-mst.controller';

describe('BlockMstController', () => {
  let controller: BlockMstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlockMstController],
    }).compile();

    controller = module.get<BlockMstController>(BlockMstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
