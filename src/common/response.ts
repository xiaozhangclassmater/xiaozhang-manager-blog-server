type DataTypes<T = any> = number | string | Object | Array<T> | undefined | null | symbol
export default class R {
  static fail (errMsg?:string, errCode?: number ) {
    return {
      code: errCode || '1',
      message: errMsg || '请求失败',
      data: ''
    }
  }
  static success (data?:DataTypes ,Msg?:string , code?: number) {
    return {
      code: code || '000000',
      message: Msg || '请求成功',
      data: data || {}
    }
  }
}
