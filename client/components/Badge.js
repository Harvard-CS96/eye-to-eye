import React from 'react';

import strings from '../json/strings.json';

class Badge extends React.Component {
    render() {
        const { badgeId, count } = this.props;
        const renderedCount = count > 0 ?
            <div>{count}</div> :
            null;
        return <div id="Badge">
            <img src={"/assets/badges/" + badgeId + "-on.png"} width="100" height="100" />
            {renderedCount}
        </div>
    }
}

export default Badge;