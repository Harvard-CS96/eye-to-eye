import React from 'react';
import { Link } from 'react-router-dom';
import Strings from '../json/strings.json';
import Login from '../containers/Login';
import Logout from '../containers/Logout';
import { Carousel } from 'react-responsive-carousel';

class LandingPage extends React.Component {
    render() {
        return <div id="LandingPage">
            <ul class="topnav">
                <li>Home</li>
                <li class="right"><a href="#about">About</a></li>
            </ul>
            <h1>Join The Conversation</h1>
            <Login />
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} emulateTouch={true}>
                <div>
                    <img src={require("../assets/preview1.png")} />
                    <p className="legend">Share your views on trending topics and issues.</p>
                </div>
                <div>
                    <img src={require("../assets/preview2.png")} />
                    <p className="legend">Have a discussion with someone with different views.</p>
                </div>
                <div>
                    <img src={require("../assets/preview3.png")} />
                    <p className="legend">Rate your partner and earn badges for having great conversations.</p>
                </div>
            </Carousel>
            <Login />
        </div>
    }
}

export default LandingPage;

