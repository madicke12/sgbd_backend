import { Controller, Req } from '@nestjs/common';
import { AvisService } from './avis.service';
import { Body, Get, Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
@Controller('avis')
export class AvisController {
  constructor(private avisService: AvisService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  getAvis(@Body() dto, @Req() req: Request) {
    return this.avisService.getAvis(dto, req);
  }
}
