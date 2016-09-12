import React, { Component } from 'react';
import { Breadcrumb, Row, Col } from 'antd';
import request from 'superagent';
import Header from './../component/header';
import Form from './form';

import URL from './../router/index'

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.name = "";
        this.api = "";
    }

    handleClick(name, api) {
        this.name = name;
        this.api = api;
    }

    goForword() {
        var _this = this;

        if(this.name === "" || this.api === ""){
            return false;
        }

        request
            .post(URL.createAPi)
            .send({ apiName: _this.name, apiPrefix: _this.api })
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
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>New</Breadcrumb.Item>
                            <Breadcrumb.Item className="add-api" href="#/"><i className="icon iconfont">&#xe657;</i><span className="add-api-btn">Go Back</span></Breadcrumb.Item>
                        </Breadcrumb>
                        <Form handleClick={this.handleClick.bind(this)} />
                        <button href="#/apis" className="fr go-forword" onClick={this.goForword.bind(this)}><i className="icon iconfont">&#xe656;</i></button>
                    </Col>
                </Row>
                
            </div>
        );
    }
}