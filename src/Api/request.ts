import axios from "axios"
import  { type InternalAxiosRequestConfig } from 'axios';

const request = axios.create({
    baseURL:'http://127.0.0.1:8000',    
    //headers:{Accept:'application/json'},
    responseType: 'json',
})

// 添加请求拦截器
request.interceptors.request.use(
    function (config: InternalAxiosRequestConfig) {
      // 在发送请求之前做些什么
      console.log('请求拦截器：', config);
      // 可以在这里添加token或者其他任何你想要的请求头
      // config.headers['Authorization'] = 'Your Token';
      // 可以在这里对config进行返回
      return config;
    },
    function (error) {  
      // 对请求错误做些什么 
      return Promise.reject(error);
    }
  );
  

export default request