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
        var _this = this;
        
        clearTimeout(this.timer);
        
        this.state.inputValue = value;
        this.setState({inputValue:value});

        this.timer = setTimeout(function() {

            request
                .post(URL.updateSchema)
                .send({"_id":_this.props.data._id,"total":value})
                .end(function(err, res) {
                    res= JSON.parse(res.text);
                    console.log(res);
                });

        }, 300);
    }

    render() {

        var data = this.props.data;

        //var url = `$(URL.url)\/$(data.apiPrefix)\/$(data.schemaName)`;
        var url = URL.url +  data._id;
        
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
                        <Slider defaultValue={data.total} onChange={this.handleChange.bind(this)} />
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