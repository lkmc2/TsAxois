const toString = Object.prototype.toString

/**
 * 判断传入的参数是否是日期类型（is 语法相当于给 val 进行 as 类型转换）
 * @param val 参数
 */
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

/**
 * 判断传入的参数是否是对象类型（is 语法相当于给 val 进行 as 类型转换）
 * @param val 参数
 */
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
