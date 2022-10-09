const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    
    const queryObj = url.parse(request.url, true).query;
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    
    const n1 = queryObj.num1;
    const n2 = queryObj.num2;
    const s = queryObj.sign;
    
    response.write(`${eval(n1 + s + n2)}`);
    response.end();
    
}).listen(3000, "127.0.0.1", function() {
    console.log("Server http://localhost:3000");
});