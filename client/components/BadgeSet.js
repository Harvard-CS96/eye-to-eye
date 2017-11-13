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
            <h3>BadgeSet</h3>
<<<<<<< 0341f52a0760043172870e9cfc4eb3ebc89519bb
            { rows.map((x, i) => ({...x, key: i})) }
=======
            {rows}
>>>>>>> Removed counter and HelloWorld default messages.
        </div>
    }
}

export default BadgeSet;