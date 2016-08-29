import React, { Component } from 'react';
import { Input, Select } from 'antd';
const Option = Select.Option;

import SchemaAction from '../actions/schemaAction';

export default class Schema extends Component {

    constructor(props) {
        super(props);
    }

    handleClick(){
        SchemaAction.removeSchema(this.props.no);
    }

    render() {
        var name = this.props.opt.name || "";
        var type = this.props.opt.type || "String";

        return (
            <div className="schema-input">
                <Input size="large" style={{width:'25%'}} defaultValue={name} />
                <Select size="large" style={{ width: "20%", marginLeft:10 }} defaultValue={type} disabled={type=="ID"?true:false}>
                    <Option value="String">String</Option>
                    <Option value="Number">Number</Option>
                    <Option value="Boolean">Boolean</Option>
                    <Option value="Object">Object</Option>
                    <Option value="Array">Array</Option>
                    <Option value="Date">Date</Option>
                </Select>
                <button className={type=="ID"?"remove-schema hide":"remove-schema"} onClick={this.handleClick.bind(this)}>
                    <i className="icon iconfont">&#xe650;</i>
                    <span>Remove Schema</span>
                </button>
            </div>
        );
    }
}