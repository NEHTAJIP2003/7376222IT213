var http = require("http");
http.createServer(function(request, response) {

    response.writeHead(200, {'content-type': 'text/plain'});
    response.end('Hello World-7376222IT213-NETHAJI P\n');
}).listen(3100);

console.log('Server running at http://127.0.0.1:3100/');