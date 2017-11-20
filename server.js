/* server.js
 *
 * The main server dispatcher.
 *
 */

require('dotenv').config();

const {
  CONN_STATUS
} = require('./constants')
const {
  WAITING,
  PAIRING,
  DISCONNECTED
} = CONN_STATUS;

const uuid = require('uuid');

// to connect to the database and instantiate the data models
var db = require('./db/connect');

// to use the express module
var app = require("express")();

var server = require("http").createServer(app);

// Authentication
var passport = require('passport');

// Parsing post requests
var bodyParser = require('body-parser');
var multer = require('multer');

// ----------------
// Begin Merged code
// ----------------

/*global console*/
var config = require('getconfig'),
    fs = require('fs'),
    sockets = require('./sockets'),
    port = parseInt(process.env.PORT || config.server.port, 10),
    https = require('https');

// Create an http(s) server instance to that socket.io can listen to
var options = {
    key: fs.readFileSync(config.server.key),
    cert: fs.readFileSync(config.server.cert),
};

var server = https.createServer(options, app).listen(port, function() {
    console.log("Express server listening on port " + port);
});

sockets(server, config);

console.log('signal master is running at: ' + "https://localhost:" + port);

app.use(express.static('public'))

// ----------------
// End Merged code
// ----------------
