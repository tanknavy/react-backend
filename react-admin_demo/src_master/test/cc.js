const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){ //访问根
        res.write('Hello World');
        res.end();
    };

    //路由router
    if(req.url === '/api/user'){
        res.write(JSON.stringify([1,2,3])); //json包装一个数组返回
        res.end();
    };
});

// server.on('connection', (socket)=>{ //监听器
//     console.log('New connection...');
// })

server.listen(3000);
console.log('Listening on port 3000...');