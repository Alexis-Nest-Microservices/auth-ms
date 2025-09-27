import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /*
    foo.* matches foo.bar, foo.baz, and so on, but not foo.bar.baz
    foo.*.bar matches foo.baz.bar, foo.qux.bar, and so on, but not foo.bar or foo.bar.baz
    foo.> matches foo.bar, foo.bar.baz, and so on
  */

  @MessagePattern('auth.register.user')
  registerUser(){
    return 'User registered';
  }

  @MessagePattern('auth.login.user')
  loginUser(){
    return 'User logged in';
  }

  @MessagePattern('auth.verify.user')
  verifyToken(){
    return 'User verified';
  }


}
