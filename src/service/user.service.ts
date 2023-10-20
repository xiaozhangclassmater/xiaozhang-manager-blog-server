import { InjectModel } from '@nestjs/sequelize';
import User from '@/model/user.model';

class UserService {
  constructor(
      @InjectModel(User)
      private UserModel: typeof User
    ){

  }
  private querySingleUserInfo (userId: string) {

  }
}
export default UserService
