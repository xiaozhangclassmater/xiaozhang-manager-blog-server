import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Modules from "./module/index.module";
import envConfigOptions from "./common/env.config";
import { createSequelizeModuleToDb } from "./database";
const dbModule = createSequelizeModuleToDb({ database : 'nodejs_blog_server'})
@Module({
  imports: [envConfigOptions,dbModule,...Modules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
