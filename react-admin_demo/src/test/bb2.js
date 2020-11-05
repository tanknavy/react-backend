const Logger = require('./bb') //导入一个类

//var logger = new Logger.Logger();
var logger = new Logger();

//监听事件开启
logger.on('loggerEvent',(args)=>{ //监听到时间loggerEvent执行动作
    console.log('Listener called' ,args);
});

//触发事件
logger.log("模拟发起请求");//发起请求同时产生一个事件；