import { Controller, Get, Injectable, Post, Put } from '@nestjs/common';
import UserService from '@/service/user.service';

@Injectable()
@Controller('/user')
class UserController {
  constructor(private readonly userService: UserService) {}
  /**
   * @Description: 查询用户信息
   * @author xiaoZhang
   * @date 2023/10/20
  */
  @Get()
  public queryUserInfo () {
  }
  @Post()
  public addUser(){
  }

  @Put()
  public updateUser () {

  }
}
export default UserController
