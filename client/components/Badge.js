import React from 'react';

import strings from '../json/strings.json';

class Badge extends React.Component {
    render() {
        return <div id="Badge">
            <h1>badge, {this.props.badgeId}</h1>
        </div>
    }
}

export default Badge;