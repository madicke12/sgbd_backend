import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { PvService } from './pv.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { PvDto } from 'src/auth/dto/pv.dto';

@Controller('pv')
export class PvController {
  constructor(private pvService: PvService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  get(@Req() req: Request) {
    return this.pvService.getAll(req);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('creer')
  creer(@Body() pvDto: PvDto, @Req() req: Request) {
    return this.pvService.creerPV(pvDto, req);
  }
}
