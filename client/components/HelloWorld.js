import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../containers/Counter';
import Feedback from '../containers/Feedback';
import Profile from '../containers/Profile'

import Strings from '../json/strings.json';

class HelloWorld extends React.Component {
    render() {
        return <div id="HelloWorld">
            <Feedback />
            <Link to="/about">{Strings.HelloWorld.link}</Link>
            {Strings.HelloWorld.body}
            <ReportAbuse />
            <br />
            <Link to="/profile">{Strings.HelloWorld.link2}</Link>
            <br />
            <Link to="/about">{Strings.HelloWorld.link1}</Link>
            <br />
            <Link to="/feedback">{Strings.Feedback.link}</Link>
        </div>
    }
}

export default HelloWorld;