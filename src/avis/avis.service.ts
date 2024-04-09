import { Request } from 'express';
import { AvisDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AvisService {
  constructor(private prisma: PrismaService) {}

  async getAvis(req: Request) {
    
  }
}
