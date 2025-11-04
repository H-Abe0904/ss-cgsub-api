import { Test, TestingModule } from '@nestjs/testing';
import { LzstockController } from './lzstock.controller';

/**
 * LzstockControllerの単体テストクラス
 */
describe('LzstockController', () => {
  let controller: LzstockController;

  /**
   * テストモジュールのセットアップ
   */
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
