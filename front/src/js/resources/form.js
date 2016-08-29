import React, { Component } from 'react';

import Schema from './schema';

import SchemaAction from '../actions/schemaAction';
import SchemaStore from '../stores/schemaStore';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opt: SchemaStore.getAll(),
            paramNum: 0
        }
    }

    _onChange() {
        this.state.opt = SchemaStore.getAll();
        this.setState({opt: this.state.opt});
    }

    componentDidMount() {
        SchemaStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        SchemaStore.removeChangeListener(this._onChange.bind(this));
    }

    handleClick() {
        var name = "param" + this.state.paramNum++;
        SchemaAction.addNewSchema({name:name,type:"String"});

    }

    render() {
        
        var opt = this.state.opt;
        var schemaArr = [];
       
        for( var i = 0, optLen = opt.length; i< optLen; i++ ) {
            schemaArr.push(
                <Schema 
                    opt={opt[i]} 
                    no={i} 
                    _onChange={this._onChange.bind(this)} 
                    key={opt[i].name} 
                />
            );
        }

        return (
            <div className="schema">
                <h2>New Resource</h2>
                <div className="content">
                    <h3>Resource Name</h3>
                    <p>Enter meaningful resource name, it will be used to generate RESTful API URLs. Ex: users, comments, articles.</p>
                    <input type="text" name="resource-name" id="resource-name" />
                    <h3>Options</h3>
                    <p>Define Resource schema, this will be used to generate mock data.</p>
                    <div className="schema-list">
                        {schemaArr}
                    </div>
                    <button className="add-schema" onClick={this.handleClick.bind(this)}><i className="icon iconfont">&#xe630;</i><span>Add Schema</span></button>
                    
                </div>
                
            </div>
        );
    }
}