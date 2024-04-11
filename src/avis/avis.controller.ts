import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AvisDto } from 'src/auth/dto';
import { AvisService } from './avis.service';
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
  creer(@Body() dto: AvisDto) {
    return this.avisService.create(dto);
  }
}
