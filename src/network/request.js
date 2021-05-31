import axios from 'axios'

export function request(config) {
    //创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    //axios的拦截器
    //请求拦截
    instance.interceptors.request.use(config => {
        //1.比如config中的一些信息不符合服务器的要求
        //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
        //3.某些网络请求(比如登录(token)),必须携带一些特殊信息
        return config
    }, err => {

    });
    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {

    });
    return instance(config)
}