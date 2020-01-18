import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { builderURL } from './helpers/url'

/**
 * 使用 Axios 进行网络请求
 * @param config 网络请求配置
 */
function axios(config: AxiosRequestConfig) {
  // 处理请求配置
  processConfig(config)

  // 调用网络请求模块
  xhr(config)
}

/**
 * 处理请求配置
 * @param config 请求配置
 */
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
}

/**
 * 转换 url
 * @param config 请求配置
 */
function transformUrl(config: AxiosRequestConfig) {
  const { url, params } = config
  // 创建请求的 url 完整地址
  return builderURL(url, params)
}

// 导出网络请求模块
export default axios
