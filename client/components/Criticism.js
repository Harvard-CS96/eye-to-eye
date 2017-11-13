import React from 'react';

import strings from '../json/strings.json';

class Criticism extends React.Component {
    render() {
        var criticismId = this.props.criticismId;
        return <div id="Criticism">
            {this.props.criticismId}
        </div>
    }
}

export default Criticism;