import React, { Component } from 'react';
import request from 'superagent';

export default class Form extends Component {

    constructor(props) {
        super(props);
    }

    handleChange() {
        var name = this.refs.name.value;
        var api = this.refs.api.value;
        this.props.handleClick(name,api);

    }

    render() {

        return (
            <div className="new-api-form">
                <h2 className="title">新建API接口</h2>
                <div className="content">
                    <h3>接口名字</h3>
                    <p>例如: Todoapp, blog, secretproject.</p>
                    <input placeholder="API Name" name="api-name" id="api-name" ref='name' onChange={this.handleChange.bind(this)} />
                    <h3>接口地址</h3>
                    <p>例如:  /api/v1, /blog/list, /list/page</p>
                    <input placeholder="API ad" name="api-ad" id="api-ad" ref='api' onChange={this.handleChange.bind(this)} />
                </div>
            </div>
        );
    }
}