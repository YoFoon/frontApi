var SchemaInstancd = require("./../mongo/schema");

var createApi = function *(){

    var data = {};

    data.state = 1;

    var date = new Date();

    //存储各种时间格式，方便以后扩展
    var time = {
        date: date,
        year : date.getFullYear(),
        month : date.getFullYear() + "-" + (date.getMonth() + 1),
        day : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
        minute : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + 
        date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) 
    }
    
    var front = new SchemaInstancd({
        userName: "YoFoon",
        time: time,
        apiName: this.request.body.apiName,
        apiPrefix: this.request.body.apiPrefix,
        schemaName: this.request.body.schemaName,
        format: JSON.stringify(this.request.body.format),
        total: 10
    })

    try {
        yield front.save();
    } catch(e) {
        data.state = 0;
        data.msg = e;
    }

    this.body = data;
}

module.exports = createApi;