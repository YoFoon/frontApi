import React, { Component } from 'react';
import { Breadcrumb, Row, Col } from 'antd';
import request from 'superagent';

import SchemaStore from '../stores/schemaStore';
import Header from './../component/header';
import Form from './form';

import URL from './../router/index'

export default class Resources extends Component {

    constructor(props) {
        super(props);
        this.schemaName = "";
    }

    setSchamaName(name) {
        this.schemaName = name;
    }

    goForword() {
        var _this = this;
        var data = SchemaStore.getAll();

        request
            .post(URL.createSchema)
            .send({ schemaName: _this.schemaName, format: data })
            .end(function(err, res){
                if(err) {

                    return false;
                }
                
                window.location.href="#/apis";
            });
            
    }

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
                        <Form setSchamaName={this.setSchamaName.bind(this)} />
                        <button className="fr go-forword" onClick={this.goForword.bind(this)}><i className="icon iconfont">&#xe656;</i></button>
                    </Col>
                </Row>
                
            </div>
        );
    }
}