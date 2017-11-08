/* server.js
 *
 * The main server dispatcher.
 *
 */

// require('dotenv').config();

const {
  CONN_STATUS
} = require('./constants')
const {
  WAITING,
  PAIRING,
  DISCONNECTED
} = CONN_STATUS;

// to connect to the database and instantiate the data models
var db = require('./db/connect');

// to use the express module
var router = require("express")();

var server = require("http").createServer(router);

// Authentication
var passport = require('passport');

// Parsing post requests
var bodyParser = require('body-parser');
var multer = require('multer');

var config = require('getconfig'),
    fs = require('fs'),
    sockets = require('./sockets'),
    express = require('express');

var app = express();
var socketio = require("socket.io")()

// to use the handlebars templating engine
var exphbs = require('express-handlebars');
router.engine('handlebars', exphbs({defaultLayout: 'main'}));
router.set('view engine', 'handlebars');


const session = require("express-session")({
  secret: "my-secret",
  resave: true,
  saveUninitialized: true
});

const sharedsession = require("express-socket.io-session");

router.use(require('cookie-parser')());
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
router.use(session);
router.use(passport.initialize());
router.use(passport.session());


socketio.use(sharedsession(session, {
  autoSave:true
}));

// to listen to port 3000
// server.listen(process.env.PORT || 3000)

const Matcher = require('./matcher');
let matcher = new Matcher((id, status, partner = null) => {
  switch (status) {
    case WAITING:
      {
        // io.sockets.emit("meta", `${id} is waiting`)
        socketio.to(id).emit("waiting");
        break;
      }
    case PAIRING:
      {
        // io.sockets.emit("meta", `${id} is pairing to ${partner}`)
        socketio.to(id).emit("pairing", matcher.getUsername(partner));
        break;
      }
    case DISCONNECTED:
      {
        socketio.to(id).emit("disconnected", matcher.getUsername(partner))
      }
    default:
      {
        break;
      }
  }
})

// add callbacks to matcher
// <<<<<<< 3eca27f48de8f31d8fd7f603aa20cf1cbd8d7faf:server.js
const chat = require('./controllers/chats');
matcher.addCallback(PAIRING,      chat.logConnection);
matcher.addCallback(DISCONNECTED, chat.logDisconnection);
// =======
// const logging = require('./controllers/logging');
// matcher.addCallback(PAIRING,      logging.logConnection);
// matcher.addCallback(DISCONNECTED, logging.logDisconnection);

// when a user connects to the socket
// socketio.sockets.on("connection", function (socket) {
  // when socket receives a message from a user, the (data) parameter
  // is the message the user send

  // let { user_id, username } = socket.handshake.session;
  // if (!username) {
  //   socket.emit('request username')
  // } else {
  //   socket.emit('recall username', username)
  //   matcher.connect(socket.id, username, user_id);
  // }

  // socket.on("send message", function (data) {
  //   socket.emit("new message", `You said: ${data}`)
  //   socket.broadcast.to(matcher.getPartner(socket.id)).emit("new message", 
  //     `${matcher.getUsername(socket.id)} says: ${data}`
  //     )

  // })
// >>>>>>> Added react webpack in client:server/index.js


sockets(socketio, matcher, config);

// Require our routes
const mainRoute = require('./routes/main')
router.use('/', mainRoute);

const createUtilRoute = require('./routes/util');
const utilRoute = createUtilRoute(matcher)
router.use('/util', utilRoute);

module.exports = {
  router,
  socketio
}