const log4js = require('log4js')
const path = require('path');
interface appenderOptions {
  type?: 'console' | 'file' | 'fileSync' | 'dateFile' | 'logLevelFilter' | 'multiFile' | 'multiprocess' | 'recording' | 'stderr' | 'stdout' | 'tcp',
  alwaysIncludePattern?: boolean,
  maxLogSize?: number,
  keepFileExt?: boolean,
  filename: string
}
const createAbsUrl = (url:string, dir?:string, filename?:string) => path.resolve(__dirname, url , dir || '' , filename || '')
const createAppender = (options?:appenderOptions) =>{
  const defaultOptions = {
    type: 'file',
    alwaysIncludePattern: true,
    maxLogSize: 1024, // 最大文件存储大小
    keepFileExt: true, // 是否保持文件以 .log结尾
  }
  return Object.assign(defaultOptions ,options)
}

log4js.configure({
  appenders:{
    app: createAppender({ filename: createAbsUrl('../logs','app','application.log'), type : 'dateFile'}),
    api: createAppender({
      filename: createAbsUrl('../logs' , 'api' , 'api.log'),
      type: 'dateFile'
    }),
    default: {
      type: 'file',
      filename: createAbsUrl('../logs', 'app', 'application.log')
    }
  },
  categories: {
    app: {
      appenders: ["app"],
      level: 'info'
    },
    requestApi:{
      appenders: ["api"],
      level: 'info'
    },
    default: {
      appenders: ['default'],
      level: 'all'
    }
  }
})
export default class LoggerIns {
  public static appLoggerIns = log4js.getLogger('app')
  public static requestApiIns = log4js.getLogger('requestApi')
}
