import React from 'react';

import strings from '../json/strings.json';

class Badge extends React.Component {
    render() {
        const { badgeId, count, on = true, onClick } = this.props;
        const renderedCount = count > 0 ?
            <div>{count}</div> :
            null;
        const className = (typeof onClick === 'function') ?
            'clickable' :
            ''
        const imgSuffix = on === true ?
            'on' :
            'off';
        return <div id="Badge" className={className} onClick={onClick}>
            <img src={"/assets/badges/" + badgeId + "-" + imgSuffix + ".png"} width="100" height="100" />
            {renderedCount}
        </div>
    }
}

export default Badge;