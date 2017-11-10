import React from 'react';
import Badge from '../containers/Badge';
import strings from '../json/strings.json';

class BadgeSet extends React.Component {
    render() {
        return <div id="BadgeSet">
            <h1>BadgeSet</h1>
            <Badge badgeId="badge1" />
        </div>
    }
}

export default BadgeSet;