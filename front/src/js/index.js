import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import Index from './component/index';




ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Index}/>
    </Router>
) , document.getElementById('app'));