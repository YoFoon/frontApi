var mongoose = require("./connect");

var ListsSchema = new mongoose.Schema({
    userName: String,
    time: Object,
    apiName: String,
    apiPrefix: String,
    schemaName: String,
    format: String,
    total: Number
})

//为BlogSchema模型追加addBlog方法
ListsSchema.methods.addApi = function (params, callback) {

    this.time = params.time;
    this.apiName = params.apiName;
    this.apiPrefix = params.apiPrefix;
    this.schemaName = params.schemaName;
    this.format = params.format;
    this.total = 10;
    
    this.save(callback);
}

// lists 是数据库的一个集合
var Lists = mongoose.model('lists', ListsSchema);

module.exports =  Lists;