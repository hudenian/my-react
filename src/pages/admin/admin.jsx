import React, {Component} from 'react'
import {Layout} from 'antd';

import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

const {Footer, Sider, Content} = Layout

export default class Admin extends Component {
    render() {
        return (
            <Layout style={{height: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{background: 'white', margin: '20px'}}>
                        Content
                    </Content>
                    <Footer style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0.5)'}}>
                        huma版本所有@2021
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}
