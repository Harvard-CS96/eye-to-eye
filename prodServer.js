// Load environment variables
require('dotenv').config();

const PORT = process.env.PORT || 8080;

const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

// Initialize server
let app = express();
let server = require('./server/entry');

// Serve built client
app.use(serveStatic('build'))

// server
app.use(server)

// Redirect remaining requests to client root
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(PORT, function() {
    console.log("Now listening on port " + PORT + " :)");
}) 