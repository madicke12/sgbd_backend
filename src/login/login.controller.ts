import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class LoginController {
  @Get()
  log() {
    return 'I love Aida';
  }
  @Get()
  lig() {
    return 'i am great';
  }
}
