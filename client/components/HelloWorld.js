import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../containers/Counter';

import Strings from '../json/strings.json';

class HelloWorld extends React.Component {
    render() {
        return <div id="HelloWorld">
            {Strings.HelloWorld.body}
            <Counter />
            <Link to="/about">{Strings.HelloWorld.link}</Link>
        </div>
    }
}

export default HelloWorld;