import { INestApplication } from '@nestjs/common';
import RouterAuthGuard from './authRouter';
import GlobalInterceptor from './Interceptors';
import AppExceptionFilters from './exceptionFilters';
import { HttpAdapterHost } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path'
export async function provideGlobalApi(app: NestExpressApplication<any>){
  await app.useGlobalGuards(new RouterAuthGuard()) // 全局的 身份校验
  await app.useGlobalInterceptors(new GlobalInterceptor) // 全局的请求拦截器和响应拦截器
  await app.useGlobalFilters(new AppExceptionFilters(app.get(HttpAdapterHost))) // 全局的异常过滤器
  await app.useStaticAssets(path.resolve(__dirname , '../../public')) // 静态资源服务器
}

