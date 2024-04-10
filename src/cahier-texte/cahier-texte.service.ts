import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CahierTexteService {
  constructor(private prisma: PrismaService) {}

  async getCahier() {
    const data = await this.prisma.cahierTexte.findMany();
  }
}
