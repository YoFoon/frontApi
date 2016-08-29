import { Dispatcher } from 'flux';
var AppDispatcher = new Dispatcher();

import SchemaStore from '../stores/schemaStore';

AppDispatcher.register( (Action) => {

    switch( Action.action ) {
        case 'ADD_NEW_SCHEMA': 

            SchemaStore.addNewSchema(Action.param);

            SchemaStore.emitChange();

            break;

        case 'REMOVE_SCHEMA':

            SchemaStore.removeSchema(Action.param);

            SchemaStore.emitChange();

            break;

        default:
    }

})

export default AppDispatcher;