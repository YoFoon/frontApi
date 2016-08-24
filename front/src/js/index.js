import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import Index from './index/index';
import New from './new/index';
import Apis from './apis/index';
import Resources from './resources/index'; 

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Index}/>
        <Route path="/new" component={New}/>
        <Route path="/apis" component={Apis}/>
        <Route path="/resources" component={Resources} />
    </Router>
) , document.getElementById('app'));