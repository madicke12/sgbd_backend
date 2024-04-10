import { Test, TestingModule } from '@nestjs/testing';
import { CahierTexteController } from './cahier-texte.controller';

describe('CahierTexteController', () => {
  let controller: CahierTexteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CahierTexteController],
    }).compile();

    controller = module.get<CahierTexteController>(CahierTexteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
