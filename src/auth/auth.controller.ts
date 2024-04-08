import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}
  @Post('login')
  login() {
    return this.authservice.login();
  }
  @Post('logout')
  logout() {
    return this.authservice.logout();
  }
}
