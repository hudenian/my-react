import React, { Component } from 'react';
import { Card, Table } from 'antd';
// import axios from './../../axios';
// import Utils from './../../utils/utils'
class User extends Component {
    state = {
        dataSource: [],
        dataSource2: []
    }
    params = {
        page: 1
    }
    componentDidMount () {
        const dataSource = [
            {
                key: '0',
                id: "0",
                userName: 'Jack',
                sex: '1',
                status: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '江苏南京',
                time: '09:00'
            },
            {
                key: '1',
                id: "1",
                userName: 'Tom',
                sex: '1',
                status: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '江苏南京',
                time: '09:00'
            },
            {
                key: '2',
                id: "2",
                userName: 'Jerry',
                sex: '1',
                status: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '江苏南京',
                time: '09:00'
            }
        ]
        this.setState({
            dataSource
        })
        // this.request()
    }
    // request = () => {
    //     let _this = this;
    //     axios.ajax({
    //         url: '/table/list',
    //         data: {
    //             params: {
    //                 pageNo: _this.params.pageNo
    //             }
    //         }
    //     }).then((res) => {
    //         if (res.code === 0) {
    //             this.setState({
    //                 selectedRowKeys: [],
    //                 dataSource2: res.result.list,
    //                 pagination: Utils.pagination(res, (current) => {
    //                     _this.params.pageNo = current
    //                     _this.request()
    //                 })
    //             })
    //         }
    //     })
    // }
    render () {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                width:80,
            },
            {
                title: '用户名',
                dataIndex: 'userName',width:80,
            },
            {
                title: '性别',
                dataIndex: 'sex',width:80,
                render (sex) {
                    return sex == 1 ? "男" : "女"
                }
            },
            {
                title: '状态',
                dataIndex: 'status',width:80,
                render (status) {
                    const config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[status];
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',width:80,
                render (interest) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[interest];
                }
            },
            {
                title: '地址',width:120,
                dataIndex: 'address',
            },
            {
                title: '早起时间',width:80,
                dataIndex: 'time',
            }
        ]
        const selectedRowKeys = this.state.selectedRowKeys
        const rowSelection = {
            type: "radio",
            selectedRowKeys
        }
        return (
            <div>
                <Card title="头部固定">
                    <Table dataSource={this.state.dataSource} columns={columns} />
                </Card>
                <Card title="动态渲染表格-Mock" style={{ margin: '10px 0' }}>
                    <Table scroll={{ y: 240 }} dataSource={this.state.dataSource2} columns={columns} pagination={
                        this.state.pagination
                    } />
                </Card>
            </div>
        );
    }
}

export default User;
