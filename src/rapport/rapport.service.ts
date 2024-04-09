import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { RapportDto } from 'src/auth/dto';

@Injectable()
export class RapportService {
  getAllRapport(dto: RapportDto, req: Request) {
    const user = req.user;
    console.log(user);
    return 'This action returns all rapport';
  }
}
