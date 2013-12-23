var express = require('express');
var app = express();
var port = process.env.port || 1337;

function start() {
    app.get('/', function(req, res) {
        req.send("Hello Masse!");
    })

    app.listen(port);
}

exports.start = start;