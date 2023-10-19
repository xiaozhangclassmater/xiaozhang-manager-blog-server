import { Controller, Injectable, Logger, Post, Req } from '@nestjs/common';
import LoginService from '../service/login.service';

@Injectable()
@Controller('/login')
class LoginController {
  private readonly logger = new Logger(LoginController.name)
  constructor(private readonly loginService: LoginService) {}
  @Post()
  userLogin(@Req() request:Request) {
    this.logger.log(`接收到客户端请求地址为${request.url}`)
    return this.loginService.login();
  }
}
export default LoginController;
