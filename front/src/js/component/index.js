import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
export default class Index extends React.Component {

	componentDidMount() {
		request
            .get("http://57b6d0697bf47f1100f15dd6.mockapi.io/blog/list/articles")
            .end(function(err, res){
                res = JSON.parse(res.text);

                console.log(res);

            });
	}

    render() {

        return (
            <div>Hello World</div>
        );
    }
}