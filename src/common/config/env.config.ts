import { ConfigModule } from "@nestjs/config";
import { envGroup } from '@/constant';

const envConfigOptions = ConfigModule.forRoot({
      isGlobal: true,
      envFilePath : process.env.NODE_ENV === envGroup.DEVELOPMENT ? '.env.development': '.env.production'
})

export default envConfigOptions
