import React, { Component } from 'react';
import { Slider, Row, Col } from 'antd';

import request from 'superagent';

import URL from './../router/index'

export default class Api extends Component{

    constructor(props) {

        super(props);

        this.timer = null;

        this.state = {
            inputValue: props.data.total,
        }
        
    }

    handleChange(value) {
        clearTimeout(this.timer);
        
        this.state.inputValue = value;
        this.setState({inputValue:value});

        this.timer = setTimeout(function() {

            return false;
            request
                .post()
                .ssend()
                .end(function(err, res) {
                    res= JSON.parse(res.text);
                });

        }, 300);
    }

    render() {

        var data = this.props.data;
        console.log(data);
        //var url = `$(URL.url)\/$(data.apiPrefix)\/$(data.schemaName)`;
        var url = URL.url +  data.userName;
        
        if(data.apiPrefix[0] === "/") {
            url += data.apiPrefix;
        } else {
            url += "/" + data.apiPrefix;
        }
        
        if(data.apiPrefix[data.apiPrefix.length-1] === "/") {
            url += data.schemaName;
        } else {
            url += "/" + data.schemaName;
        }
        
        return (

            <div className="api">
                <p className="api-href"><a href={url} target="_blank">{url}</a></p>
                <Row className="api-tool">
                    <Col span={3}>加载条数：<span className="api-show-num">{this.state.inputValue}</span>条</Col>
                    <Col span={4}>
                        <Slider defaultValue={10} onChange={this.handleChange.bind(this)} />
                    </Col>
                    <Col span={8} offset={8}>
                        放一些控件什么的。。。
                    </Col>
                </Row>
                
            </div>

        )

    }

}
//http://blog.yofoon.com/dist/images/github.png