var SchemaInstance = require("./../mongo/schema");

var getData = function *(next) {

    var _this = this;
    var data = {};

    data.state = 0;
    
    var id = this.params.id;

    var result = yield SchemaInstance.findById(id);

    if(!result) {
        
        data.err = 'err';
    
    } else  {

        var format = JSON.parse(result.format);
        var total = result.total;

        var res = [];

        for( j = 0; j < total; j++ ) {

            res[j] = {};
            var resJ = res[j];
            resJ.id = j;

            for( var i = 1, formatLen = format.length; i < formatLen; i++ ) {

                if( format[i].type === "Date" ) {

                    resJ[format[i].name] = result.time;

                }  else if( format[i].type === "String" ) {

                    resJ[format[i].name] = "String"+ j + i;

                } else if ( format[i].type === "Number" ) {

                    resJ[format[i].name] = j + i;

                } else if ( format[i].type === "Boolean" ) {

                    resJ[format[i].name] = true;

                } else if ( format[i].type === "Array" ) {

                    resJ[format[i].name] = [1,2,3,4,5,6,7,8,9];
                    
                } else if ( format[i].type === "Object" ) {

                    resJ[format[i].name] = {
                        name: "Object" + i                        
                    };

                } 
            }

        }


        data.state = 1;
        data.data = res;

    }


    this.body = data;

}

module.exports = getData;