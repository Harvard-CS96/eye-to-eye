import React from 'react';
import strings from '../json/strings.json';

class ShowLeaders extends React.Component {
    render() {

        return <div id="ShowLeaders">
        	<div className="button" children={strings.ShowLeaders.link} />
        </div>
    }
}

export default ShowLeaders;