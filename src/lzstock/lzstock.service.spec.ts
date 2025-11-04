import { Test, TestingModule } from '@nestjs/testing';
import { LzstockService } from './lzstock.service';

describe('LzstockService', () => {
  let service: LzstockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LzstockService],
    }).compile();

    service = module.get<LzstockService>(LzstockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
