# Eye to Eye 
Eye to Eye is a nonpartisan web application that enables you to have face-to-face conversations with strangers who have different views from your own. 

# Table of Contents

1. [Getting Started](#getting-started)
2. [Technical Documentation](#technical-documentation)
    * [Technical Overview](#technical-overview)
    * [Configuration](#configuration)
    * [Database](#database)
    * [Routes](#routes)
    * [Views](#views)
    * [Controllers](#controllers)
    * [Matcher](#matcher)
    * [Socket Logic](#socket-logic)
    * [Static Assets](#static-assets)
3. [About](#about)

# Getting Started

Before running, please ensure that you have a `.env` file in the root directory in the format `KEY=VALUE`, one per line. `.env` should contain the following keys:

* DB_URI: an complete MongoDB connection URI
* FB_ID: a valid Facebook Developer App ID
* FB_SECRET: a valid Facebook Developer App Secret
* FB_CALLBACK: by default, `http://localhost:3000/auth/facebook/callback`; you should change the host and port of `FB_CALLBACK` according to the deployment configuration.

Then, run `npm install`. Finally, run `npm start`.

To run on a port other than `3000`, chaneg the `PORT` and `FB_CALLBACK`environment variables as well as the configuration in Facebook Developer.

# Technical Documentation

## Technical Overview

Eye to Eye is powered by a *node.js + express* backend. Pages are rendered server-side using the *Handlebars* templating engine. *Socket.io*, a wrapper around the *WebSocket* protocol, is used for bidirectional communication between server and client. The client side uses *Bootstrap* and *jQuery* for styling and interactivity and, following a handshake using *Socket.io*, clients initiate video chat using *WebRTC*, facilitated by *SimpleWebRTC* and *Xirsys* STUN servers. *tracking.js* is additionally used during video chat for facial masking. Data is stored using *MongoDB*.

Eye to Eye's main exectuable is `/server.js`, which:
* loads configurations from `/config` and `/.env`
* connects to MongoDB with *mongoose* and models in `/db`
* configures an *express* app using routing logic in `/routes` powered by logic in `/controllers` and rendering views in `/views`
* instantiates the matcher engine in `/matcher.js`
* initializes WebSocket communication from `/sockets.js`
* serves static resources from `/static`

Finally, in auto-deployment, shell scripts in `/scripts` are used to start/restart/stop the server using *nginx* and *pm2*.

## Configuration

Node packages *dotenv* and *getconfig* are used for configuration. *getconfig* uses JSON to store configuration and *dotenv* uses key-value pairs. Data stored in `/config/default.json` 
is inevitably passed to the client side and is thus not secret, meaning that it can be safely committed. Data stored in `/.env` is not committed because it contains sensitive API keys.

## Database

The server connects to MongoDB by requiring `/db/connect.js`, which initializes a connection to the instance the `DB_URI` from `/.env`. `/db/connect.js` also exports models from `/db/models/`.

## Routes

Most routes are contained in `/routes/main.js`. Routes often use  the `isLoggedIn` function to ensure that users are authenticated and redirecting them to `/` otherwise. Authentication is powered by *passport.js* and relevant data is stored in `req.user` after successful authentication.

Routes that render *Handlebars* views in `/views` pass the data returned by the `getAuthInfo` function to the frontend, which allows the frontend to access user account data. API routes are powered by controllers in `/controllers`.

## Views

Views are contained in `/views` and are powered by Handlebars. Similar to PHP, Handlebars is a superset of HTML syntax that allows accessing JSON-formatted variables with `{{{variable}}}`. All views begin with the `/views/layouts/main.handlebars` layout and may utilize the partial views in `/views/partials`. HTML elements in views generally are styled using *Bootstrap* classes, while *jQuery* is used for interactivity. The view */views/video.handlebars* extensively utilizes *Socket.io* and *SimpleWebRTC* to communicate with the server for pairing and disconnection. 

During video chat, *SimpleWebRTC* uses an existing *<video>* tag to display local video and any specified element as a container to render remote video. Then, *tracking.js* and a *<canvas>* element are used such that either only a face with an obscured background or the text "No face found" are displayed. Further logic is used to make that effect more performant and robust to frame drops.

## Controllers

Controllers reside in `/controllers` and work closely with models in `/db/models`. They are used to save information about conversations and users' stances as well as load data about users for matching purposes.

## Matcher

The matching engine is powered by `/matcher.js`. The matcher is completely modular from the server-side routing so that it can be separately tested. Currently, the matcher utilizes a dictionary, one entry per user, to match users and store their connection status (single or paired) in real time. In the future, the matcher may utilize a real-time in-memory database such as *Redis* for scale.

## Socket Logic

The server communicates over *WebSocket* using *Socket.io* routes in `/sockets.js`. Routes in this file are used initially to communicate to the matching engine to facilitate matching users who are online and waiting to find a video chat partner. After the matching engine has paired users, the other routes in this file are used to generate a unique room ID for those users to join, sending credentials for the STUN servers as well as a room ID.

## Static Assets

Images and CSS are stored in `/static/img` and `/static/css`. `/static/js` contains the *SimpleWebRTC* and *tracking.js* libraries as well as a face-detection plugin for *tracking.js*. Complex AJAX requests for transmitting user opinions and post-conversation feedback are powered by `/static/js/stances.js` and `/static/js/feedback.js`, respectively.

# About

Eye to Eye was created during the Fall 2017 offering of Harvard College's *CS96: System Design Projects*, taught by Professor [Stuart Shieber](https://github.com/shieber). *CS96*'s students included: 
* [Alex Abrahams](https://github.com/AlexAbes)
* [Nicholas Boucher](https://github.com/nickboucher)
* [William Bryk](https://github.com/willbryk720)
* [Stephanie Campbell](https://github.com/stephaniecampbell1996)
* [Anjali Fernandes](https://github.com/aefernandes)
* [Jan Geffert](https://github.com/JanGeffert)
* [Sam Kessler](https://github.com/skesslr)
* [Lisa Lu](https://github.com/LisaLudique)
* [Jacob Lurye](https://github.com/jacoblurye)
* [Patrick Pan](https://github.com/patrickhpan)
* [Russell Pekala](https://github.com/russellpekala)
* [Sam Plank](https://github.com/samplank)
