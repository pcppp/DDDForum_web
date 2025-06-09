// src/api/axios.ts
import axios from 'axios';
import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { toast } from 'sonner';

// 创建 axios 实例
const instance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    // headers 在 InternalAxiosRequestConfig 中永远存在
    config.headers.Authorization = token ? `Bearer ${token}` : '';

    return config;
  },
  (error) => Promise.reject(error)
);
// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.error);
    }
    return response.data;
  }, // 只返回 data 部分
  (error) => {
    toast.error(error.response.data.error);
    return Promise.reject(error);
  }
);

export const get = <T>(url: string, params?: object): Promise<T> => {
  return instance.get(url, { params });
};

export const post = <T>(url: string, data?: object): Promise<T> => {
  return instance.post(url, data);
};
export default instance;
