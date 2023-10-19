import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function Main() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(process.env.NODE_ENV);

}
Main();
