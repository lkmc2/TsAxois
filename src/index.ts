import { AxiosRequestConfig } from './types'
import xhr from './xhr'

/**
 * 使用 Axios 进行网络请求
 * @param config 网络请求配置
 */
function axios(config: AxiosRequestConfig) {
  // 调用网络请求模块
  xhr(config)
}

// 导出网络请求模块
export default axios
