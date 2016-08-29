import React, { Component } from 'react';
import { Breadcrumb, Row, Col } from 'antd';
import { Link } from 'react-router'

import Header from './../component/header';
import Form from './form';


export default class Resources extends Component {

    render() {

        return (
            <div>
                <Header />
                <Row>
                    <Col lg={{span:16,offset:4}} md={{span:16,offset:4}} sm={{span:20,offset:2}} xs={{span:22,offset:1}} >
                        <Breadcrumb separator=">" >
                            <Breadcrumb.Item href="#/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#/apis" className="apis-name">Apis</Breadcrumb.Item>
                            <Breadcrumb.Item className="apis-tool">Rsources</Breadcrumb.Item>
                            <Breadcrumb.Item className="add-api" href="#/apis"><i className="icon iconfont">&#xe657;</i><span className="add-api-btn">Go Back</span></Breadcrumb.Item>
                        </Breadcrumb>
                        <Form />
                        <Link to="apis" className="fr go-forword"><i className="icon iconfont">&#xe656;</i></Link>
                    </Col>
                </Row>
                
            </div>
        );
    }
}