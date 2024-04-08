import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { message: 'Login' };
  }
  logout() {
    return { message: 'Logout' };
  }
}
