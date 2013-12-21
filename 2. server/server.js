var http = require('http');
var port = process.env.port || 1337;

function start() {
    function onRequest(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    }
    http.createServer(onRequest).listen(port);
}

exports.start = start;
