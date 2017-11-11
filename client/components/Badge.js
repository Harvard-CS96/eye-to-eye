import React from 'react';

import strings from '../json/strings.json';

class Badge extends React.Component {
    render() {
        var path = require('path');
        console.log(path);
        const url = "./client/assets/badge-" + this.props.badgeId + "-off.png"
        return <div id="Badge">
            <h1>badge</h1>
            {/* <img src={require(url)}/> */}
        </div>
    }
}

export default Badge;