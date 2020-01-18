import { AxiosRequestConfig } from './types'

/**
 * 网络请求模块
 * @param config 请求配置
 */
export default function xhr(config: AxiosRequestConfig): void {
  // 解构对象中的属性，并给 method 属性设置默认值
  const {data, url, method = 'get'} = config

  const request = new XMLHttpRequest()

  // 使用异步网络请求
  request.open(method.toUpperCase(), url, true)

  request.send(data)
}
