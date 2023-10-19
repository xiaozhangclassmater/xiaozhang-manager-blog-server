import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Modules from "./module/index.module";
import envConfigOptions from "./common/config/env.config";
import { createSequelizeModuleToDb } from "./database";
import { createStaticServerModule } from './common/config/staticServer.config';
import * as path from 'path';
const dbModule = createSequelizeModuleToDb({ database : 'nodejs_blog_server'})
const staticServerModule = createStaticServerModule(path.resolve(__dirname ,'../public'))
@Module({
  imports: [envConfigOptions, dbModule, staticServerModule, ...Modules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
