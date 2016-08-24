import React, { Component } from 'react';
import { Breadcrumb, Row, Col } from 'antd';
import { Link } from 'react-router'

import Header from './../component/header';

export default class Apis extends Component {

    render() {

        return (
            <div>
                <Header />
                <Row>
                    <Col lg={{span:16,offset:4}} md={{span:16,offset:4}} sm={{span:20,offset:2}} xs={{span:22,offset:1}} >
                        <Breadcrumb separator=">" >
                            <Breadcrumb.Item href="#/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Apis</Breadcrumb.Item>
                            <Breadcrumb.Item className="apis-tool"><Link to="/resources"><i className="icon iconfont">&#xe630;</i></Link><i className="icon iconfont">&#xe64e;</i></Breadcrumb.Item>
                            <Breadcrumb.Item className="add-api" href="#/"><i className="icon iconfont">&#xe657;</i><span className="add-api-btn">Go Back</span></Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                
            </div>
        );
    }
}