import request from '../Api/request'

//定义接口数据 export导出数据
export const getLogin = (params: any)=>request({
    method:'GET',
    url:'/login',
    params
})

export const BasicInf = (data: any)=>request({
    method:'post',
    url:'/basicdata/',
    data
})


