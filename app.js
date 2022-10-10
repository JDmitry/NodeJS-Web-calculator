const http = require('http');
const fs = require('fs');
const url = require('url');
const host = '127.0.0.1';
const port = 3000;
let result;

http.createServer(function(request, response) {
    const queryObj = url.parse(request.url, true).query;
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    
    //const n1 = queryObj.num1;
    // const n2 = queryObj.num2;
    // const s = queryObj.sign;

    try {
        //result = `${eval(n1 + s + n2)}`;
        result = eval(queryObj.num1);

        fs.readFile("index.html", "utf-8", function(error, data){
        
            data = data.replace("{result}", result);
            result = 0;
            response.end(data);
        });
    } catch (err) {
        fs.readFile("index.html", "utf-8", function(error, data){
        
            data = data.replace("{result}", "error");
            result = 0;
            response.end(data);
        });
    }
}).listen(port, host, function() {
    console.log(`Server is running on http://${host}:${port}`);
});

