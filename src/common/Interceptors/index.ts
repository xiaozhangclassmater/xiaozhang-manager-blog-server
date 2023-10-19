import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import LoggerIns from '../../logger.config';

@Injectable()
class GlobalInterceptor implements NestInterceptor{
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest()
    LoggerIns.requestApiIns.info(request.url)
    return next.handle().pipe(map(data => data === '' ? null : data));
  }
}

export default GlobalInterceptor
