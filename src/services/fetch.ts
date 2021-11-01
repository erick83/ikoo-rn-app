import axios, { AxiosRequestConfig, Method } from "axios"

export const BASE_URL = 'http://10.0.2.2:5000/api'
// export const BASE_URL = 'https://ikoo-server.herokuapp.com/api'

export async function fetchService (url: string, options?: AxiosRequestConfig) {
  const config: AxiosRequestConfig = {
    baseURL: BASE_URL,
    url,
    headers: { 'Content-Type': 'application/json' },
    ...options
  }

  try {
    const response = await axios(config)
    console.log(response)
    return response
  } catch (e) {
    console.error(e)
    return e
  }
}
