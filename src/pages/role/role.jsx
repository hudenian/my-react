import React, {Component, Fragment} from 'react';
import {Button, Form, Input, Table} from 'antd';


class Role extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                },
            ],
            data: [
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',
                },
            ],
        };
    };

    onFinish = (values) => {
        console.log('Finish:', values);
    };

    render() {
        const {columns,data}  = this.state;
        return (
            <Fragment>
                <Form name="horizontal_login" layout="inline" onFinish={this.onFinish}>
                    <Form.Item
                        label="角色名称"
                        name="name"
                    >
                        <Input placeholder="角色名称"/>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            查询
                        </Button>
                    </Form.Item>
                </Form>
                <Table dataSource={data} columns={columns} >

                </Table>
            </Fragment>
        );
    };
}

export default Role;