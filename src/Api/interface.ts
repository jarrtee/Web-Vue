import request from '../Api/request'

//定义接口数据 export导出数据
export const getLogin = (params: any)=>request({
    method:'GET',
    url:'/login',
    params
})

export const BasicInf = (params: any)=>request({
    method:'post',
    url:'/basicdata/',
    params
})


