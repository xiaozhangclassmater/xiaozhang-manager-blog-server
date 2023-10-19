import { Column, Model, Table } from "sequelize-typescript";

@Table
class Login extends Model {
  id :string;
  @Column
  loginId: string;

  @Column
  LoginPwd: string;

  @Column({ defaultValue: true })
  token: boolean;
}

export default Login
