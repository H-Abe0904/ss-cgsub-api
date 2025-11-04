import { Test, TestingModule } from '@nestjs/testing';
import { LzstockController } from './lzstock.controller';

describe('LzstockController', () => {
  let controller: LzstockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LzstockController],
    }).compile();

    controller = module.get<LzstockController>(LzstockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
