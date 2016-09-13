var mongoose = require("./connect");
var Schema = mongoose.Schema;

var ListsSchema = new Schema({
    userName: String,
    time: Object,
    apiName: String,
    apiPrefix: String,
    schemaName: String,
    format: String,
    total: Number
})

// lists 是数据库的一个集合
var Lists = mongoose.model('lists', ListsSchema);

module.exports =  Lists;