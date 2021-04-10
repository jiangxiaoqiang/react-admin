import axios from 'axios'

// 这里取决于登录的时候将 token 存储在哪里
const token = localStorage.getItem('token')

const instance = axios.create({
    timeout: 5000
})

// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json'

// 添加请求拦截器
instance.interceptors.request.use(
    config => {
        console.log("请求拦截");
        // 将 token 添加到请求头
        token && (config.headers.token = token)
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    response => {
        if (response.status === 200 && response.data.statusCode === '200') {
            return Promise.resolve(response)
        } else if(response.data.statusCode === '907'){
            window.location.href = '/#/login'
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        // 相应错误处理
        // 比如： token 过期， 无权限访问， 路径不存在， 服务器问题等
        switch (error.response.status) {
            case 401:
                break
            case 403:
                break
            case 404:
                break
            case 500:
                break
            default:
                console.log('其他错误信息')
        }
        return Promise.reject(error)
    }
)

export default instance
