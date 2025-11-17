import { Test, TestingModule } from '@nestjs/testing';
import { BlockMstService } from './block-mst.service';

describe('BlockMstService', () => {
  let service: BlockMstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockMstService],
    }).compile();

    service = module.get<BlockMstService>(BlockMstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
