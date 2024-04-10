import { Test, TestingModule } from '@nestjs/testing';
import { CahierTexteService } from './cahier-texte.service';

describe('CahierTexteService', () => {
  let service: CahierTexteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CahierTexteService],
    }).compile();

    service = module.get<CahierTexteService>(CahierTexteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
