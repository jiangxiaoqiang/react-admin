import React, { Component } from 'react'
import { Layout, Input, Form, Button, Divider, message, notification } from 'antd'
import { withRouter } from 'react-router-dom'
import '@/style/view-style/login.scss'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { loginImpl } from '../../service/cruise/UserService'
import { create } from '@ant-design/compatible'

class Login extends Component {
    state = {
        loading: false
    }

    enterLoading = () => {
        this.setState({
            loading: true
        })
    }

    handleLoginSuccess = values => {
        // let params = queryString.parse(this.props.location.search)
        // if (Object.keys(params).length !== 0 && params.logined === false) {
        //    return
        // }
        if (values.token && values.token.token) {
            // 这里可以做权限校验 模拟接口返回用户权限标识
            switch (values.username) {
                case 'admin':
                    values.auth = 0
                    break
                default:
                    values.auth = 0
            }
            let token = values.token.token
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(values))
            this.enterLoading()
            message.success('登录成功!')
            this.props.history.push('/')
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let { username, password } = values
                var request = {
                    phone: username,
                    password: password
                }
                loginImpl(request)
            }
        })
    }

    UNSAFE_componentWillMount() {}
    componentWillUnmount() {
        notification.destroy()
        this.timer && clearTimeout(this.timer)
    }

    render() {
        let user = this.props.user
        this.handleLoginSuccess(user)

        return (
            <Layout className='login animated fadeIn'>
                <div className='model'>
                    <div className='login-form'>
                        <h3>后台管理系统</h3>
                        <Divider />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item name='username' rules={[{ required: true, message: '请输入用户名!' }]}>
                                <Input
                                    prefix={<UserOutlined type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder='用户名'
                                />
                            </Form.Item>
                            <Form.Item name='password' rules={[{ required: true, message: '请输入密码' }]}>
                                <Input
                                    prefix={<LockOutlined type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type='password'
                                    placeholder='密码'
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                    className='login-form-button'
                                    loading={this.state.loading}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Login
