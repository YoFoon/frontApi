import React, { Component } from 'react';
import request from 'superagent';

import URL from './../router/index'

import EachList from './eachList';

export default class ApiList extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        var _this = this;
		request
            .get(URL.getApiList)
            .end(function(err, res){
                res = JSON.parse(res.text);

                _this.state.list = res.data;
                _this.setState({list:res.data});

            });
	}

    render() {
        var listArr = [];
        var list = this.state.list;
        for( var i = 0, listLen = list.length; i< listLen; i++ ){

            listArr.push(<EachList params={list[i]} />);

        }

        return (
            <div className="api-list">
                {listArr}
            </div>

        )

    }

}