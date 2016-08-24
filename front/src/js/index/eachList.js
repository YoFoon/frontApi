import React, { Component } from 'react';

export default class EachList extends Component{

    render() {

        return (
            <div className="each-list clearfix">
                <span className="tag fl">B</span>
                <div className="fl">
                    <p className="api-name">Blog</p>
                    <p className="create-time">2016-08-23</p>
                </div>
                <i className="icon iconfont fr api-enter">&#xe656;</i>
            </div>

        )

    }

}