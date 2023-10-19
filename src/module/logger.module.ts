import { Module } from '@nestjs/common';
import AppLogger from '../common/appLogger';

@Module({
  providers: [AppLogger],
  exports: [AppLogger]
})
export default class LoggerModule{}
