import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Request } from 'express';
import { AvisDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AvisService {
  constructor(private prisma: PrismaService) {}

  async getAvis() {
    try {
      const avis = await this.prisma.avis.findMany();
      if (avis.length > 0) {
        return { avis: avis };
      }
      return { message: "Pas d'avis" };
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        throw e;
      }
      console.log(e);
    }
  }

  async create(dto: AvisDto, req: Request) {
    const user = req.user as User;
    const avis = await this.prisma.avis.create({
      data: {
        contenu: dto.contenu,
        auteurId: user.id,
      },
    });
    return { avis };
  }
}
