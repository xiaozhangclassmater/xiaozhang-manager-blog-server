import { Module } from '@nestjs/common';
import LoginService from "../service/login.service";
import LoginController from "../controller/login.controller";
import { createModelRelevanceInstances } from "../utils/common";
import { Login } from "../model/login.model";

@Module({
  imports: [
    createModelRelevanceInstances([Login])
  ],
  providers: [LoginService],
  controllers: [LoginController],
})
export default class LoginModule {}
