var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var SchemaStore = assign({}, EventEmitter.prototype,{

    opt:  [{name:"id",type:"ID"}, {name:"time",type:"Date"},{name:"name",type:"String"},{name:"img",type:"String"}],

    getAll: function() {
        return this.opt;
    },

    addNewSchema:  function(param) {
        this.opt.push(param);
    },

    removeSchema: function(key){
        this.opt.splice(key,1)
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on("change", callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener("change", callback);
    }

})


export default SchemaStore;