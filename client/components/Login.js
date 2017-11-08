import React from 'react';
import { Link } from 'react-router-dom';

import strings from '../json/strings.json';

class Login extends React.Component {
    login = () => {
        window.location.pathname = "/auth/facebook";
    }
    render() {
        const { login } = this;
        return <div id="Login">
            <div className="button" children={strings.Login.link} onClick={login} />
        </div>
    }
}

export default Login;