const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function(request, response) {

    const queryObj = url.parse(request.url, true).query;
    
    response.writeHead(200, {
        
        'Content-Type': 'text/html; charset=utf-8'
    });
    
    try {

        let result = eval(queryObj.expression);

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
}).listen(3000, "127.0.0.1", function() {
    console.log("Server is running on http://127.0.0.1:3000");
});

