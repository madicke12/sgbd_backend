import { Injectable } from '@nestjs/common';
import { rapport, User } from '@prisma/client';
import { Request } from 'express';
import { RapportDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RapportService {
  constructor(private prisma: PrismaService) {}
  async getAllRapport(req: Request) {
    const user = req.user as User;

    const rapport = await this.prisma.rapport.findMany({
      where: { auteurId: user.id },
    });
    if (rapport.length > 0) {
      return rapport;
    }
    return { message: 'Pas de rapport' };
  }

  async creer(dto: RapportDto, req: Request) {
    const contenu = dto.contenu;
    const user = req.user as User;

    const rapport = await this.prisma.rapport.create({
      data: {
        contenu: contenu,
        auteurId: user.id,
      },
    });
    return { rapport };
  }
}
