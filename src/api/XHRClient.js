import axios from 'axios'
import store from '../store/index'
import { message } from 'antd'
import { removeUserAction } from '../actions/UserActions'

let isRrefreshingAccessToken = false
// 重试队列，每一项将是一个待执行的函数形式
let requests = []

const instance = axios.create({
    timeout: 15000
})

instance.defaults.headers.post['Content-Type'] = 'application/json'

instance.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('accessToken');
        accessToken && (config.headers['Authorization'] = 'Bearer ' + accessToken);
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        if (response.status === 200 && response.data.statusCode === '200' && response.data.resultCode === '200') {
            return Promise.resolve(response)
        } else if (response.data.statusCode === '907') {
            redirectToLogin()
        } else if (response.data.statusCode === '904') {
            //登录已失效
            redirectToLogin()
        } else if (response.data.resultCode === '00100100004016') {
            handleRefreshAccessToken(response)
        } else {
            let errorMessage = response.data.msg
            // message.error(errorMessage)
            console.error(errorMessage)
            return Promise.reject(response)
        }
    },
    error => {
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

export function redirectToLogin() {
    store.dispatch(removeUserAction(''))
    window.location.href = '/#/login'
}

function handleRefreshAccessToken(response) {
    const config = response.config
    if (!isRrefreshingAccessToken) {
        isRrefreshingAccessToken = true
        // access token invalid
        refreshAccessToken()
            .then(refreshResult => {
                let accessToken = refreshResult.accessToken
                if (accessToken) {
                    localStorage.setItem('token', accessToken)
                    localStorage.setItem('accessToken', accessToken)
                    // retry the last request
                    instance.defaults.headers['Authorization'] = 'Bearer ' + accessToken
                    requests.forEach(cb => cb(accessToken))
                    requests = []
                    return instance(config)
                }
            })
            .catch(res => {
                console.error('refreshtoken error =>', res)
                redirectToLogin()
            })
            .finally(() => {
                isRrefreshingAccessToken = false
            })
    } else {
        // 正在刷新token，将返回一个未执行resolve的promise
        return new Promise(resolve => {
            // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
            requests.push(token => {
                config.baseURL = ''
                config.headers['Authorization'] = 'Bearer ' + token
                resolve(instance(config))
            })
        })
    }
}

function refreshAccessToken() {
    const refreshToken = localStorage.getItem('refreshToken')
    if (!refreshToken) {
        redirectToLogin()
    }
    return refreshAccessTokenImpl(refreshToken)
}

function refreshAccessTokenImpl(refreshToken) {
    const urlParams = {
        deviceId: 'xxxxxx',
        app: 6,
        refreshToken: refreshToken
    }
    const config = {
        method: 'post',
        url: `/manage/auth/access_token/refresh`,
        data: urlParams
    }
    return requestWithoutAction(config)
}

export function requestWithAction(config, action) {
    return instance(config)
        .then(response => {
            if (response) {
                const data =
                    response.data.result == null || Object.keys(response.data.result).length === 0
                        ? {}
                        : response.data.result
                store.dispatch(action(data))
            }
        })
        .catch(error => {
            console.error(error)
        })
}

export function requestWithoutAction(config) {
    return instance(config)
        .then(response => {
            if (response) {
                const data =
                    response.data.result == null || Object.keys(response.data.result).length === 0
                        ? {}
                        : response.data.result
                return data
            }
        })
        .catch(error => {
            console.error(error)
        })
}
