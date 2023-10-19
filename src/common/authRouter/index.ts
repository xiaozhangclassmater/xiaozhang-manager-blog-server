import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
const whiteRoutes = ['/login']
@Injectable()
class RouterAuthGuard implements CanActivate{
  constructor() {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()
    if(whiteRoutes.includes(request.url)){
      return true
    }
    // 如果不在白名单里 但是 你有 sessionId 是登录成功的 如果 没有 则是登录失败的
    if(!whiteRoutes.includes(request.url)){
      return !!request.session.sessionId;
    }
    // 默认情况需要校验不要走到 service里
    return false
  }
}
export default RouterAuthGuard
