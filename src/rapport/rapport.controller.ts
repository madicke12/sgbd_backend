import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { RapportService } from './rapport.service';
import { RapportDto } from 'src/auth/dto';
import { Request, request } from 'express';
import { AuthGuard } from '@nestjs/passport';
@Controller('rapport')
export class RapportController {
  constructor(private rapportService: RapportService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  getAllRapport(@Req() req: Request) {
    return this.rapportService.getAllRapport(req);
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('creer')
  creerRapport(@Body() dto: RapportDto, @Req() req: Request) {
    return this.rapportService.creer(dto, req);
  }
}
