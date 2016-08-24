import React, { Component } from 'react';

import Schema from './schema';

export default class Form extends Component {

    render() {
        var schemaArr = [];
        for( var i = 0; i< 4; i++ ) {
            schemaArr.push(<Schema />);
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
                </div>
                
            </div>
        );
    }
}