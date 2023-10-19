import { INestApplication } from '@nestjs/common';
import * as session from 'express-session';
const sessionOptions = {
  secret: 'blog_sessionId',
  resave: false,
  saveUninitialized: false,
}
export async function provideGlobalMiddleWare (app: INestApplication) {
  await app.use(session(sessionOptions))

}
