import request from '../Api/request'

//定义接口数据 export导出数据
export const getLogin = (params: any)=>request({
    method:'GET',
    url:'/login',
    params
})
//获取用户基础信息
export const BasicInf = (params: any)=>request({
    method:'post',
    url:'/basicdata/',
    params
})
//获取用户头像
export const BasicPhoto = (params: any)=>request({
    method:'post',
    url:'/basicphoto/',
    responseType:'blob',
    params
})
//更改用户基本信息
export const UpdateBasicData = (params: any)=>request({
    method:'post',
    url:'/UpdateBasicData/',
    params
})
