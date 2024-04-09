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

@Module({
  imports: [AuthModule, UserModule, PrismaModule],
  controllers: [AppController, RapportController, AvisController],
  providers: [AppService, RapportService, AvisService],
})
export class AppModule {}
