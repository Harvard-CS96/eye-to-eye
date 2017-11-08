import React from 'react';
import { Link } from 'react-router-dom';

import strings from '../json/strings.json';

class Logout extends React.Component {
    logout = () => {
        window.location.pathname = "/logout";
    }
    render() {
        const { logout } = this;
        const { user } = this.props;
        const { id, name } = user;
        return <div id="Logout">
            <br />
            <div>Hello, { name }!</div>
            <div className="button" children={strings.Logout.link} onClick={logout} />
        </div>
    }
}

export default Logout;