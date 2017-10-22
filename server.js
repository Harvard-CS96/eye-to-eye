/* server.js
 *
 * The main server dispatcher.
 *
 */

// to use the express module
var express = require("express");

var app = express();

// to make an http server object
var server = require("http").createServer(app);

// to use our socket.io module
var io = require("socket.io").listen(server);

// to listen to port 80
server.listen(80)

// to serve the index.html file
app.get("/", function(req, res){
  res.sendfile(__dirname + "/index.html")
})

// when a user connects to the socket
io.sockets.on("connection", function(socket){

    // when socket receives a message from a user, the (data) parameter
    // is the message the user send
    socket.on("send message", function(data){

    // socket will send messages to every single user
    io.sockets.emit("new message", data);

  })

})