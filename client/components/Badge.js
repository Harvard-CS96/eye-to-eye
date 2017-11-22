import React from 'react';
import cn from 'classnames';
import strings from '../json/strings.json';

class Badge extends React.Component {
    render() {
        const { badgeId, count, on = true, onClick } = this.props;
        const renderedCount = count > 0 ?
            <div>{count}</div> :
            null;
        const className = cn([
            'Badge',
            { 'clickable': (typeof onClick === 'function') }
        ])
        const imgSuffix = on === true ?
            'on' :
            'off';
        return <div className={className} onClick={onClick}>
            <img src={"/assets/badges/" + badgeId + "-" + imgSuffix + ".png"} width="100" height="100" />
            {renderedCount}
        </div>
    }
}

export default Badge;