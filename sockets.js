var uuid = require('node-uuid'),
    crypto = require('crypto');

module.exports = function(server, io, matcher, config) {

    io.sockets.on('connection', function(socket) {
        socket.resources = {
            screen: false,
            video: true,
            audio: true
        };

        // pass a message to another id
        socket.on('message', function(details) {
            console.log(details);
            if (!details) return;

            var otherClient = io.to(details.to);
            if (!otherClient) return;

            details.from = socket.id;
            otherClient.emit('message', details);
        });

        socket.on('shareScreen', function() {
            socket.resources.screen = true;
        });

        socket.on('unshareScreen', function(type) {
            socket.resources.screen = false;
            removeFeed('screen');
        });

        socket.on('join', join);

        function removeFeed(type) {
            if (socket.room) {
                io.sockets.in(socket.room).emit('remove', {
                    id: socket.id,
                    type: type
                });
                if (!type) {
                    socket.leave(socket.room);
                    socket.room = undefined;
                }
            }
        }

        function join(name, cb) {
            // sanity check
            if (typeof name !== 'string') return;
            // check if maximum number of sockets reached
            if (config.rooms && config.rooms.maxClients > 0 &&
                socketsInRoom(name) >= config.rooms.maxClients) {
                safeCb(cb)('full');
                return;
            }
            // leave any existing rooms
            removeFeed();
            safeCb(cb)(null, describeRoom(name));
            socket.join(name);
            socket.room = name;
        }

        // we don't want to pass "leave" directly because the
        // event type string of "socket end" gets passed too.
        socket.on('disconnect', function() {
            removeFeed();
        });
        socket.on('leave', function() {
            removeFeed();
        });

        socket.on('create', function(name, cb) {
            if (arguments.length == 2) {
                cb = (typeof cb == 'function') ? cb : function() {};
                name = name || uuid();
            } else {
                cb = name;
                name = uuid();
            }
            // check if exists
            var room = io.nsps['/'].adapter.rooms[name];
            if (room && room.length) {
                safeCb(cb)('taken');
            } else {
                join(name);
                safeCb(cb)(null, name);
            }
        });

        // support for logging full webrtc traces to stdout
        // useful for large-scale error monitoring
        socket.on('trace', function(data) {
            console.log('trace', JSON.stringify(
                [data.type, data.session, data.prefix, data.peer, data.time, data.value]
            ));
        });

        // when socket receives a message from a user, the (data) parameter
        // is the message the user send

        let {
            user_id,
            username
        } = socket.handshake.session;
        if (!username) {
            socket.emit('request username')
        } else {
            socket.emit('recall username', username)
            matcher.connect(socket.id, username, user_id);
        }

        socket.on("send message", function(data) {
            socket.emit("new message", `You said: ${data}`)
            socket.broadcast.to(matcher.getPartner(socket.id)).emit("new message",
                `${matcher.getUsername(socket.id)} says: ${data}`
            )

        })

        socket.on("set user", ({
            username,
            user_id
        }) => {
            matcher.connect(socket.id, username, user_id);
            socket.handshake.session.username = username;
            socket.handshake.session.save();
            socket.emit('recall username', username)
        })

        socket.on("disconnect", () => {
            matcher.disconnect(socket.id);
        })

        socket.on("hangup", () => {
            matcher.hangup(socket.id);
        })

        socket.on("logout", () => {
            delete socket.handshake.session.user_id;
            delete socket.handshake.session.username;
            socket.handshake.session.save()
            matcher.disconnect(socket.id)
        })


        // tell socket about stun and turn servers and generate nonces
        socket.emit('stunservers', config.stunservers || []);

        // create shared secret nonces for TURN authentication
        // the process is described in draft-uberti-behave-turn-rest
        var credentials = [];
        // allow selectively vending turn credentials based on origin.
        var origin = socket.handshake.headers.origin;
        if (!config.turnorigins || config.turnorigins.indexOf(origin) !== -1) {
            config.turnservers.forEach(function(server) {
                var hmac = crypto.createHmac('sha1', server.secret);
                // default to 86400 seconds timeout unless specified
                var username = Math.floor(new Date().getTime() / 1000) + (parseInt(server.expiry || 86400, 10)) + "";
                hmac.update(username);
                credentials.push({
                    username: username,
                    credential: hmac.digest('base64'),
                    urls: server.urls || server.url
                });
            });
        }
        socket.emit('turnservers', credentials);
    });


    function describeRoom(name) {
        var adapter = io.nsps['/'].adapter;
        var sockets = adapter.rooms[name] || {};
        var result = {
            sockets: {}
        };
        Object.keys(sockets).forEach(function(id) {
            result.sockets[id] = adapter.nsp.connected[id].resources;
        });
        return result;
    }

    function socketsInRoom(name) {
        return io.sockets.sockets(name).length;
    }

};

function safeCb(cb) {
    if (typeof cb === 'function') {
        return cb;
    } else {
        return function() {};
    }
}
