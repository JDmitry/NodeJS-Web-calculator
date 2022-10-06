const http = require('http');

http.createServer(function(request, response) {
    response.end("NodeJS");
}).listen(3000, "127.0.0.1", function() {
    console.log("Port: 3000");
});