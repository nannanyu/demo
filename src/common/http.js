import axios from 'axios';

// 创建一个axios实例
let $axios = axios.create({
    // baseUrl:"http://localhost:3030/api",
    baseURL:"/api",
    timeout:3000
})

// 请求拦截
$axios.interceptors.request.use(function(config){
    return config;
},function(error){
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
$axios.interceptors.response.use(function(response){
   return  response.data;
  
},function(error){
//  对响应错误做点什么
return Promise.reject(error);
});


// 暴露axios实例
export default $axios;