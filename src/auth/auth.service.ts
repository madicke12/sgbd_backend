import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthSignUpDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login() {
    return { message: 'Login' };
  }
  logout() {
    return { message: 'Logout' };
  }
  async signup(dto: AuthSignUpDto) {
    const hash = await argon.hash(dto.mot_de_passe);
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          mot_de_passe: hash,
          Prenom: dto.prenom,
          nom: dto.nom,
          role: dto.role,
        },
      });
      delete user.mot_de_passe;
      return user;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new ForbiddenException('Email deja prise');
        }
      }
      throw e;
    }
  }
}
