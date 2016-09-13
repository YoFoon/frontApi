var SchemaInstance = require("./../mongo/schema");

var getSchemaList = function *() {
    var _this = this;

    var data = {};
    data.state = 0;

    try{

        var res = yield SchemaInstance.find({});

        data.data = res;

        data.state = 1;

    } catch(e) {

        data.err = e;

    }

    this.body = data;
}

module.exports =  getSchemaList;