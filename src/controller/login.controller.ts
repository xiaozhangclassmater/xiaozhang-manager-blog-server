import { Body, Controller, Injectable, Logger, Post, Req } from '@nestjs/common';
import LoginService from '../service/login.service';

@Injectable()
@Controller('/login')
class LoginController {
  private readonly logger = new Logger(LoginController.name)
  constructor(private readonly loginService: LoginService) {}
  @Post()
  userLogin(@Req() request: Request , @Body() body:loginServicePostBody) {
    this.logger.log(`接收到客户端请求地址为${request.url}`)
    return this.loginService.login(body);
  }
}
export default LoginController;
