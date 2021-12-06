import React, {Component} from 'react';
import {Button, Form, Input, message} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import './login.less'
import bg from './images/bg.jpeg'

import {loginApi} from "../../api/api";


const Item = Form.Item

class Login extends Component {
    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
        this.state = {
            token: null,
        }
    }

    onFinish = (values) => {
        loginApi({userName: values.userName, password: values.password}).then((response) => {
            if (response.code === 10000) {
                window.localStorage.setItem("user", values.userName)
                this.props.history.replace('/admin')
            } else {
                message.error("用户名或密码错误！")
            }
        }).catch((error) => {
            console.log(error);
        });
    }


    render() {
        return (
            <div className="login">
                <div className="login-header">
                    <img src={bg} alt="logo"/>
                    <h1>管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登陆</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{remember: true}}
                        onFinish={this.onFinish}
                    >
                        <Item
                            name="userName"
                            rules={[{required: true, message: '请输入用户名!'}]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
                        </Item>
                        <Item
                            name="password"
                            rules={[{required: true, message: '请输入密码!'}]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="密码"
                            />
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Item>
                    </Form>
                </div>

            </div>
        );
    }
}

export default Login;
