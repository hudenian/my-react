import React, {Component} from 'react';
import {Button, Form, Input} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import './login.less'
import bg from './images/bg.jpeg'

const Item = Form.Item

class Login extends Component {
    render() {
        const onFinish = (values) => {
            if(values.username==='wangjun' && values.password==='123456'){
                this.props.history.replace('/admin')
            }else{
                alert("用户名或者密码错误！")
            }
        };

        return (
            <div className="login">
                <div className="login-header">
                    <img src={bg} alt="logo"/>
                    <h1>胡德年：后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登陆</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                    >
                        <Item
                            name="username"
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
