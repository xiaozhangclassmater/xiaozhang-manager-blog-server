import { ConsoleLogger } from '@nestjs/common';

class AppLogger extends ConsoleLogger{
  error(message: any, stack?: string, context?: string) {
    // add your tailored logic here
    super.error('');
  }
}

export default AppLogger
