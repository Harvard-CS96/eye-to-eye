# Overview

Eye to Eye is powered by a *node.js + express* backend. Pages are rendered server-side using the *Handlebars* templating engine. *Socket.io*, a wrapper around the *WebSocket* protocol, is used for bidirectional communication between server and client. The client side uses *Bootstrap* and *jQuery* for styling and interactivity and, following a handshake using *Socket.io*, clients initiate video chat using *WebRTC*, facilitated by *SimpleWebRTC* and *Xirsys* STUN servers. *tracking.js* is additionally used during video chat for facial masking. Data is stored using *MongoDB*.

Eye to Eye's main exectuable is `/server.js`, which:
* loads configurations from `/config` and `/.env`
* connects to MongoDB with *mongoose* and models in `/db`
* configures an *express* app using routing logic in `/routes` powered by logic in `/controllers` and rendering views in `/views`
* instantiates the matcher engine in `/matcher.js`
* initializes WebSocket communication from `/sockets.js`
* serves static resources from `/static`

Finally, in auto-deployment, shell scripts in `/scripts` are used to start/restart/stop the server using *nginx* and *pm2*.
