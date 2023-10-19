import loggerIns from '../logger.config';
import { Logger } from '@nestjs/common';

class LoginService {
  constructor() {}
  login(){
    loggerIns.appLoggerIns.log("发送登录接口")
    // this.logger.log("登录接口接受请求 service")
    return '发送登录接口'
  }
}
export default LoginService
