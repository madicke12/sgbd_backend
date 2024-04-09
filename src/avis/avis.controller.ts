import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AvisService } from './avis.service';
import { Request } from 'express';
import { AvisDto } from 'src/auth/dto';
@Controller('avis')
export class AvisController {
  constructor(private avisService: AvisService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  getAvis() {
    return this.avisService.getAvis();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('creer')
  creer(@Body() dto: AvisDto, @Req() req: Request) {
    return this.avisService.create(dto, req);
  }
}
