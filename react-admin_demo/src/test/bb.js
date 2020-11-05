
var url = 'http://www.baidu.com'

const EventEmitter = require('events');

class Logger extends EventEmitter{ //继承事件
    log(message){
        //Send an request
        console.log(message)
        
        //Raise an event
        this.emit('loggerEvent',{id:1, url:url})
    }
};

//exports.Logger = Logger;
module.exports = Logger; //导出一个类