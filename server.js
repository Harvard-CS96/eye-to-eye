/*global console*/
var config = require('getconfig'),
    fs = require('fs'),
    sockets = require('./sockets'),
    port = parseInt(process.env.PORT || config.server.port, 10),
    https = require('https'),
    express = require('express');

// Create an http(s) server instance to that socket.io can listen to
var options = {
    key: fs.readFileSync(config.server.key),
    cert: fs.readFileSync(config.server.cert),
};

var app = express();

var server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});

sockets(server, config);

console.log('signal master is running at: ' + "https://localhost:" + port);

app.use(express.static('public'))

