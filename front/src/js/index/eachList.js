import React, { Component } from 'react';

export default class EachList extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        var params = this.props.params;

        return (
            <div className="each-list clearfix">
                <span className="tag fl">{params.apiName.substr(0,1).toUpperCase()}</span>
                <div className="fl">
                    <p className="api-name">{params.apiName}</p>
                    <p className="create-time">{params.time.day}</p>
                </div>
                <i className="icon iconfont fr api-enter">&#xe656;</i>
            </div>

        )

    }

}