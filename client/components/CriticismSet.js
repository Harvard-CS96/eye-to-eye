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
<<<<<<< 0341f52a0760043172870e9cfc4eb3ebc89519bb
            { rows.map((x, i) => ({...x, key: i})) }
=======
            {rows}
>>>>>>> Removed counter and HelloWorld default messages.
        </div>
    }
}

export default CriticismSet;