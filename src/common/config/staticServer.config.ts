import { ServeStaticModule } from '@nestjs/serve-static'
import { resolve } from 'path'
export const createStaticServerModule = (absUrl?:string) => {
  console.log("absUrl" , absUrl);
  let newsAbsUrl = absUrl || resolve(__dirname , '../../../public')
  return ServeStaticModule.forRoot({ rootPath: newsAbsUrl})
}
