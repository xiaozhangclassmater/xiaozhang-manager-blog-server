import { SequelizeModule } from "@nestjs/sequelize";
import { envGroup } from "../constant";
interface dbOptions {
  dialect?: 'mysql' | 'postgres' | 'oracle',
  host?: 'localhost' | string
  port?: number
  username?: string
  password?: string
  database?: string
  autoLoadModels?: boolean
  synchronize?: boolean
}
export function createSequelizeModuleToDb (options?:dbOptions) {
  const defaultOption:dbOptions = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'cjxy200420',
    database: 'nestjsdb',
    autoLoadModels: process.env.NODE_ENV === envGroup.DEVELOPMENT,
    synchronize: process.env.NODE_ENV === envGroup.DEVELOPMENT
  }
  const assignOptions = Object.assign(defaultOption,options)
  return SequelizeModule.forRoot(assignOptions)
}
