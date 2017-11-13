import React from 'react';
import Criticism from '../containers/Criticism';
import strings from '../json/strings.json';

class CriticismSet extends React.Component {
    render() {
        const { criticismsDisplayed } = this.props
        var rows = [];
        for (var i = 0; i < criticismsDisplayed.length; i++) {
            rows.push(<Criticism criticismId={criticismsDisplayed[i]}/>)
        }
        return <div id="CriticismSet">
            <h3>CriticismSet</h3>
            { rows.map((x, i) => ({...x, key: i})) }
        </div>
    }
}

export default CriticismSet;