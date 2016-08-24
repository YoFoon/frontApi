import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { Row, Col } from 'antd';

import Header from './../component/header';
import ApiList from './apiList';

export default class Index extends Component {

    render() {

        return (
            <div>
                <Header />
                <Row>
                    <Col lg={{span:16,offset:4}} md={{span:16,offset:4}} sm={{span:20,offset:2}} xs={{span:22,offset:1}} >
                        <Breadcrumb separator=">" >
                            <Breadcrumb.Item >Home</Breadcrumb.Item>
                            <Breadcrumb.Item className="add-api" href="#/new"><i className="icon iconfont">&#xe630;</i><span className="add-api-btn">新建API</span></Breadcrumb.Item>
                        </Breadcrumb>
                        <ApiList />
                    </Col>
                </Row>
                
            </div>
        );
    }
}