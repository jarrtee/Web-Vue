import request from './request'

//定义接口数据 export导出数据
export const getLogin = params=>request({
    method:'GET',
    url:'/login',
    params
})

export const BasicInf =params=>request({
    method:'GET',
    url:'/dj_api/basic',
    responseType:'用户名',
    params
})

