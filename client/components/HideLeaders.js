import React from 'react';
import strings from '../json/strings.json';

class HideLeaders extends React.Component {
    render() {
		return <div id="HideLeaders">
        	<div className="button" children={strings.HideLeaders.link} />
        </div>
    }
}

export default HideLeaders;