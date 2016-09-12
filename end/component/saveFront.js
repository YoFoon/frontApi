var FrontInstancd = require("./../mongo/front");

module.exports = function *(next) {

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

    var userName =  'YoFoon';

    var apiName = 'blog';

    var front = {
        time:time,
        userName: userName,
        apiName: apiName
    }

    var data = {};

    var NewFront = new FrontInstancd(front);

    try{
        
        var result = yield NewFront.save();
        data.state = 1;
        data.data = result;
   
    } catch(e) {
     
        data.state = 0;
        data.msg = e;
    
    }

    this.body = data;
}