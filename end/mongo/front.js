var mongoose = require("./connect");
var Schema = mongoose.Schema;

var FrontSchema = new Schema({
    userName: String,
    time: Object,
    apiName: String,
    apiPrefix: String
});

// fronts 是数据库的一个集合
var Front = mongoose.model('front', FrontSchema);

module.exports = Front;