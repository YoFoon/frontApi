var FrontInstancd = require("./../mongo/front");

var getData = function *() {

    var _this = this;
    var data = {};

    var username = this.params.username;

    data.state = 0;    

    try {
        var result = yield FrontInstancd.find({userName:username});
        data.state = 1;
        data.data = result;
    } catch (e) {
        data.err = e;
    }

    this.body = data;

}

module.exports = getData;