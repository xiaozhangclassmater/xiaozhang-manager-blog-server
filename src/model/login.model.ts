import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Login extends Model {
  id :string;
  @Column
  loginId: string;

  @Column
  LoginPwd: string;

  @Column({ defaultValue: true })
  token: boolean;
}
