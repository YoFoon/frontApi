import AppDispatcher from '../dispatcher/index';

var SchemaAction = {

    addNewSchema: function(param)  {
        AppDispatcher.dispatch({
            action: "ADD_NEW_SCHEMA",
            param: param
        });
    },

    removeSchema: function(param) {
        AppDispatcher.dispatch({
            action: "REMOVE_SCHEMA",
            param: param
        })
    }

}

export default SchemaAction;