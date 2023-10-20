import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

const swaggerConfig = new DocumentBuilder()
  .setTitle('blog_nest_swagger')
  .setDescription("一套服务于博客后台的服务")
  .setVersion("1.0")
  .addTag('nodeJS')
  .build();

export function provideGlobalSwagger (app: INestApplication) {
  const document = SwaggerModule.createDocument(app , swaggerConfig)
  SwaggerModule.setup("/swagger" , app , document)
}
export default swaggerConfig
