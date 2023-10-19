import { Module } from '@nestjs/common';
import LoginService from "../service/login.service";
import LoginController from "../controller/login.controller";
import { createModelForFeatureIns } from "../utils/common";
import Login from "../model/login.model";

@Module({
  imports: [
    createModelForFeatureIns([Login])
  ],
  providers: [LoginService],
  controllers: [LoginController],
})
export default class LoginModule {}
