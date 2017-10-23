/* server.js
 *
 * The main server dispatcher.
 *
 */


const {
  CONN_STATUS
} = require('./constants')
const {
  WAITING,
  PAIRING,
  DISCONNECTED
} = CONN_STATUS;

// to use the express module
var app = require("express")();

// to make an http server object
var server = require("http").createServer(app);

// to use our socket.io module
var io = require("socket.io").listen(server);

// to listen to port 3000
server.listen(process.env.PORT || 3000)

// to serve the index.html file
app.get("/", function (req, res) {
  res.sendfile(__dirname + "/index.html")
})


const Matcher = require('./matcher');
let matcher = new Matcher((id, status, partner = null) => {
  switch (status) {
    case WAITING:
      {
        // io.sockets.emit("meta", `${id} is waiting`)
        io.to(id).emit("waiting");
        break;
      }
    case PAIRING:
      {
        // io.sockets.emit("meta", `${id} is pairing to ${partner}`)
        io.to(id).emit("pairing", matcher.getUsername(partner));
        break;
      }
    case DISCONNECTED:
      {
        io.to(id).emit("disconnected", matcher.getUsername(partner))  
      }  
    default:
      {
        break;
      }
  }
})


// when a user connects to the socket
io.sockets.on("connection", function (socket) {
  // when socket receives a message from a user, the (data) parameter
  // is the message the user send


  socket.on("send message", function (data) {

    // socket will send messages to every single user
    // io.sockets.emit("new message", `${socket.id}: ${data}`);
    socket.emit("new message", `You said: ${data}`)
    socket.broadcast.to(matcher.getPartner(socket.id)).emit("new message", `${matcher.getUsername(socket.id)} says: ${data}`)

  })

  socket.on("set username", username => {
    matcher.connect(socket.id, username);
    
  })

  socket.on("disconnect", () => {
    matcher.disconnect(socket.id);
  })

})

app.get('/connections', (req, res) => {
  res.end(matcher.prettyPrint())
})
