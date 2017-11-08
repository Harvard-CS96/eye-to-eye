import React from 'react';
import { Link } from 'react-router-dom';

import strings from '../json/strings.json';

class Logout extends React.Component {
    render() {
        const { userId, logout } = this.props
        return <div id="Logout">
            <br />
            <div>{"user " + userId }</div>
            <div className="button" children={strings.Logout.link} onClick={logout} />
        </div>
    }
}

export default Logout;