import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { RapportController } from './rapport/rapport.controller';
import { AvisController } from './avis/avis.controller';
import { RapportService } from './rapport/rapport.service';
import { AvisService } from './avis/avis.service';
import { CahierTexteController } from './cahier-texte/cahier-texte.controller';
import { CahierTexteService } from './cahier-texte/cahier-texte.service';
import { PvController } from './pv/pv.controller';
import { PvService } from './pv/pv.service';

@Module({
  imports: [AuthModule, UserModule, PrismaModule],
  controllers: [
    AppController,
    RapportController,
    AvisController,
    CahierTexteController,
    PvController,
  ],
  providers: [
    AppService,
    RapportService,
    AvisService,
    CahierTexteService,
    PvService,
  ],
})
export class AppModule {}
