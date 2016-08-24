import React, { Component } from 'react';
import { Input, Select } from 'antd';
const Option = Select.Option;

export default class Schema extends Component {

    render() {

        return (
            <div className="schema-input">
                <Input size="large" style={{width:'25%'}}  />
                <Select size="large" style={{ width: "20%", marginLeft:10 }}>
                    <Option value="String">String</Option>
                    <Option value="Number">Number</Option>
                    <Option value="Boolean">Boolean</Option>
                    <Option value="Object">Object</Option>
                    <Option value="Array">Array</Option>
                    <Option value="Date">Date</Option>
                </Select>
                <button className="remove-schema">
                    <i className="icon iconfont">&#xe650;</i>
                    <span>Remove Schema</span>
                </button>
            </div>
        );
    }
}