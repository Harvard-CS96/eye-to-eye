import React from 'react';
import Badge from '../containers/Badge';
import strings from '../json/strings.json';

class BadgeSet extends React.Component {
    render() {
        const { badgesDisplayed } = this.props
        var rows = [];
        for (var i = 0; i < badgesDisplayed.length; i++) {
            rows.push(<Badge badgeId={badgesDisplayed[i]}/>)
        }
        return <div id="BadgeSet">
            <h2>BadgeSet</h2>
            {rows}
        </div>
    }
}

export default BadgeSet;