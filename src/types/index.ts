// 请求方式（字面量类型）
export type Method = 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'PATCH' | 'patch'

// 导出 Axios 请求配置接口描述
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
