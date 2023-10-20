import loggerIns from '../logger.config';
import { BadRequestException, HttpException, Injectable, Logger } from '@nestjs/common';
import R from '@/common/response';
import { InjectModel } from '@nestjs/sequelize';
import Login from '@/model/login.model';
@Injectable()
class LoginService {
  constructor(
    @InjectModel(Login)
    private LoginModel: typeof Login
  ) {}
  async login(body:loginServicePostBody){
    const { loginId , loginPwd } = body
    loggerIns.appLoggerIns.log("发送登录接口")
    try {
      if(!loginId){
        return R.fail('账号不能为空')
      }
      if(!loginPwd){
        return R.fail('密码不能为空')
      }
      const userLoginInfo = await this.LoginModel.findOne({ rejectOnEmpty: false, where: { loginId }})
      if(!userLoginInfo){
        return R.fail("暂未分配该账户")
      }
      const dbInfo = userLoginInfo.toJSON() as keyofValue<Login>
      if(dbInfo.loginId === loginId && dbInfo.loginPwd === loginPwd){
        return R.success({} , '登录成功')
      }
    }catch (e) {
      throw new BadRequestException("登录超时")
    }
  }
}
export default LoginService
