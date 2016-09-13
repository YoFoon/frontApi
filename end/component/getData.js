var FrontInstance = require("./../mongo/front");

var getData = function *(next) {

    var _this = this;
    var data = {};

    data.state = 0;    

    try {
        var result = yield FrontInstance.find({});
        data.state = 1;
        data.data = result;
    } catch (e) {
        data.err = e;
    }

    this.body = data;

}

module.exports = getData;