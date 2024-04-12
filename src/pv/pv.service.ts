import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';
import { PvDto } from 'src/auth/dto/pv.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PvService {
  constructor(private prisma: PrismaService) {}

  async getAll(req: Request) {
    const user = req.user as User;
    try {
      const data = await this.prisma.pv.findMany({
        where: { redacteurId: user.id },
      });
      if (data.length <= 0) {
        return { message: 'Pas de PV' };
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async creerPV(dto: PvDto, req: Request) {
    const user = req.user as User;
    try {
      const data = await this.prisma.pv.create({
        data: {
          ...dto,
          redacteurId: user.id,
        },
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
