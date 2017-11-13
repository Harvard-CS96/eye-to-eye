import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../containers/Counter';
<<<<<<< bfd2f88c7e0ff0984d0ecb09001eca1de46c9bb4
import Feedback from '../containers/Feedback';
=======
>>>>>>> add profile
import Profile from '../containers/Profile'

import Strings from '../json/strings.json';

class HelloWorld extends React.Component {
    render() {
        return <div id="HelloWorld">
<<<<<<< bfd2f88c7e0ff0984d0ecb09001eca1de46c9bb4
            <Feedback />
            <Link to="/about">{Strings.HelloWorld.link}</Link>
            {Strings.HelloWorld.body}
            <ReportAbuse />
=======
            {Strings.HelloWorld.body}
>>>>>>> add profile
            <br />
            <Link to="/profile">{Strings.HelloWorld.link2}</Link>
            <br />
            <Link to="/about">{Strings.HelloWorld.link1}</Link>
<<<<<<< bfd2f88c7e0ff0984d0ecb09001eca1de46c9bb4
            <br />
            <Link to="/feedback">{Strings.Feedback.link}</Link>
=======
>>>>>>> add profile
        </div>
    }
}

export default HelloWorld;