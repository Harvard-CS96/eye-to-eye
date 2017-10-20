/* server.js
 *
 * We will first create a sever with node/express. 
 *
 */

// to use the express module
var express = require("express");

var app = express();

/*
// to listen on your localhost port 3000 
app.listen(3000, function(){
 console.log("hello world")
});
*/

// to make an http server object
var server = require("http").createServer(app);

// to use our socket.io module
var io = require("socket.io").listen(server);

// to listen to port 3000
server.listen(3000)

// to serve the index.html file
app.get("/", function(req, res){
  res.sendfile(__dirname + "/index.html")
})

// when a user connects to the socket
io.sockets.on("connection", function(socket){

    console.log("connected!");  
  
    // when socket receives a message from a user, the (data) parameter
    // is the message the user send
    socket.on("send message", function(data){
	
    // socket will send messages to every single user
    io.sockets.emit("new message", data);

    /*
    // socket will send to everyone but yourself
    socket.broadcast.emit("new message" ,data);
    */  
  })
    
})

