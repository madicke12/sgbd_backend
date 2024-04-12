import { Test, TestingModule } from '@nestjs/testing';
import { PvController } from './pv.controller';

describe('PvController', () => {
  let controller: PvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PvController],
    }).compile();

    controller = module.get<PvController>(PvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
