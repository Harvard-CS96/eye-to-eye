import React from 'react';
import cn from 'classnames';
import strings from '../json/strings.json';

class Criticism extends React.Component {
    render() {
        const { criticismId, on = true, onClick } = this.props;
        const className = cn([
            'button',
            { 'selected': (on === true) }
        ])
        console.log(className);
        return <div id="Criticism"><div className={className} onClick={onClick} children={criticismId} /></div>
    }
}

export default Criticism;