import React, { Component } from 'react';
import request from 'superagent';

import EachList from './eachList';

export default class ApiList extends Component{

    // componentDidMount() {
	// 	request
 //            //.get("http://57b6d0697bf47f1100f15dd6.mockapi.io/blog/list/articles")
 //            .get("http://localhost:8000/blog")
 //            .end(function(err, res){
 //                res = JSON.parse(res.text);

 //                console.log(res);

 //            });
	// }

    render() {
        var listArr = [];
        for( var i = 0; i< 10; i++ ){

            listArr.push(<EachList />);

        }

        return (
            <div className="api-list">
                {listArr}
            </div>

        )

    }

}