import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';
import { RapportDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RapportService {
  constructor(private prisma: PrismaService) {}
  async getAllRapport() {

    const rapport = await this.prisma.rapport.findMany();
    if (rapport.length > 0) {
      return rapport;
    }
    return { message: 'Pas de rapport' };
  }

  async creer(dto: RapportDto, req: Request) {
    const user = req.user as User;

    const rapport = await this.prisma.rapport.create({
      data: {
        contenu: dto.rapport,
        auteurId: user.id,
        Professeur: dto.professeur,
        nom: dto.nomRapport,
        matiere: dto.matiere,
      },
    });
    return { rapport };
  }
}
