import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AvisService {
  constructor(private prisma: PrismaService) {}
}
