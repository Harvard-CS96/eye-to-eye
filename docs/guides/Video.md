# Video

## Overview of Video

We use [WebRTC](https://webrtc.org/), a Google tool, for sending video along the peer to peer connections. A company called AndYet has open-sourced their library [SimpleWebRTC](https://github.com/andyet/SimpleWebRTC), which is what we use to do a lot of the heavy lifting of WebRTC.

In the `views` folder there is a handlebars file called `video.handlebars`. This file contains the front-facing parts of the WebRTC elements, namely the local video feed (your camera feed) and the peer video feed (your conversation partner's camera feed). These will be referred to herein as the local and peer video streams.

The SimpleWebRTC library autoplays the following `video` tag, which is your local feed:
````
<video id="localVideo"></video>
````
and appends to the following `span` tag all peer video streams that come in:
````
<span id="remoteVideos"></span>
````

#### How you receive a peer video stream
To receive a peer video stream your peer needs your IP address. If you're not sitting behind a firewall, you can just use STUN servers to swap IP addresses, but Harvard Secure sits behind a firewall and has many IP addresses available to it. So we use TURN servers, which aim to get around a recipient's firewall to send the video stream. We use a service called [Xirsys](https://xirsys.com/simplewebrtc/) to set up our TURN servers, and in our case we actually just use the TURN servers by default and don't bother with STUN servers at all. These details can be found in the `config/default.json` file.

While basic HTTPS is sufficient to load specific web pages within the application, full video chat application functionality requires a constant, two-way communication channel between the server and the client. Specifically, some dynamic communication channel is needed to exchange signaling information for WebRTC peers. WebSockets solve this problem directly; WebSockets are a two-way communication channel that can be set up between clients and servers to allow for secure, ongoing communication after page load without AJAX. Consequently, we needed to implement some form of WebSockets within our application. We chose to implement WebSockets using the Socket.io package. Socket.io was chosen because it is not only one of the most mature WebSockets implementation, but also because it integrates very nicely with Node.js.

When a user is ready to chat with a new person, the matching algorithm in `matcher.js` searches the database for other online users that are currently unpaired. For each of these unpaired users, we check whether this second user has responded to any of the same questions as the first user, and if so, has the second user responded differently on those questions. If there is a difference, we match the two users on that question. To ensure that a user does not repeatedly speak on the same topic, we randomize the order of user’s responses to questions, so that the matching algorithm does not prioritize any one question. To ensure that users who have been waiting the longest to find a match are prioritized, we implement a queue data structure for all online unpaired users.

After a successful match has occurred in `matcher.js`, `sockets.js` is used to exchange the network location information provided by the TURN protocol between matched peers via the relevant existing WebSockets channels. These peers then use the WebRTC protocol to establish a direct P2P connection that will be used to transmit video feeds.

#### Facial recognition and cutout/blurring
We use a library called `tracking.js` to do the facial recognition work. We add a `canvas` element to the HTML which maps directly over the peer video stream, using CSS styling. The relevant code begins when the `webrtc.on('videoAdded')` event is called, because we only want to begin facial tracking on the peer video stream.

We collect the dynamically-updated peer video stream ID, and pass that to the `tracking.track` function from `tracking.js`. Once tracking has started, in the `tracker.on('track')` event handler we can access the facial recognition data. This event occurs thirty times per second because the tracker samples thirty frames per second. `event.data` is an array of objects, where each object corresponds to a face recognized in the peer video stream. `event.data` has the following helpful fields to construct a rectangle around a face:
````
x : the number of pixels between the left edge of the face is from the left edge of the video tag
y : the number of pixels between the top edge of the face is from the top edge of the video tag
height : the height in pixels of the rectangle encasing the face
width : the width in pixels of the rectangle encasing the face
````

`tracking.js` can handle more than one face in the frame at a time, but accuracy declines as more faces appear.

To allow smoothing, the script first checks whether a face has been detected in the current frame. If not, it also checks whether a face has been detected at some point during the last 20 frames. If it has, then it uses that most recent face data rather than displaying nothing at all. This is because the facial recognition library is not 100% accurate, and does not always find a face in every single frame that is sampled during a second. Rather than wiping out the peer video every time that this happens, the script uses the most recent facial data. This allows users to move their face slightly as during normal conversation rather than having their face disappear entirely.

As mentioned, the script paints the peer video stream with a completely white canvas to begin with as a safety precaution. It then iterates through the `event.data` array; for each face found, it finds the center of that face and draws an oval around it which cuts through the white canvas and is shown to the user from the peer video stream underneath.
