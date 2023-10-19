
/**
 * @Description:
 * @author xiaoZhang
 * @date 2023/10/19
 * @description
 * 该类负责 App程序的异常错误处理，
 * 如果 error是nestjs内置提供的你可以响应一个完整的错误对象，如果不是 你可以将用户抛出的错误交给此程序然后封装返回
 */
import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import R from '../response';

@Injectable()
class AppExceptionFilters implements ExceptionFilter  {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}
  catch(exception: HttpException, host: ArgumentsHost): any {
    const { httpAdapter } = this.httpAdapterHost
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const errorMessage = exception.message || "服务器错误"
    httpAdapter.reply(response, R.fail(errorMessage , status) , status)
  }
}
export default AppExceptionFilters
