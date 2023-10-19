import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { provideGlobalApi } from './common/provideGlobalApi';
import { provideGlobalMiddleWare } from './middleWare';
import { NestExpressApplication } from '@nestjs/platform-express';
async function Main() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await provideGlobalApi(app)
  await provideGlobalMiddleWare(app)
  await app.listen(3000);
}
Main().then(r => r);
