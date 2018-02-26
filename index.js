// write your code here
var http = require('http');

var port = 8080;
var server = 'localhost';

http.createServer( function(req, res) {
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.end('Hello World');
    console.log('Received ' + req.method + ' request for: ' + req.url);
}).listen(port, server);

console.log('Server is listening on ' + server + ':' + port);