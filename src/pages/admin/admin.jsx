import React, { Component } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';

// import LeftNav from '../../components/left-nav'
// import Header from '../../components/header'

import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

const { Header,Footer, Sider, Content } = Layout

export default class Admin extends Component {
    render() {
        return (
            <Layout style={{height:'100%'}}>
                <Header>Header</Header>
                <Layout>
                    <Sider style={{ margin: '20px'}}>Slider</Sider>
                    <Content style={{ background: 'white', margin: '20px'}}>Content</Content>
                </Layout>
                <Footer style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.5)'}}>
                    版本所有@2021
                </Footer>
            </Layout>
        )
    }
}
