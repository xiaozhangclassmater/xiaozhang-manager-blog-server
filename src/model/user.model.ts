import { Column, Model, Table } from "sequelize-typescript";

@Table
class User extends Model {
  id :string;
  @Column
  userId: string;

  @Column
  name: string;

  @Column
  age: string;

  @Column({ defaultValue: 1 })
  sex: number;

  @Column
  birthday: Date;
}

export default User
