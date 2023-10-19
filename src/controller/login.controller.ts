import { Controller, Injectable, Post } from '@nestjs/common';
import LoginService from '../service/login.service';

@Injectable()
@Controller('/login')
class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  userLogin() {
    return this.loginService.login();
  }
}
export default LoginController;
