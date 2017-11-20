import React from 'react';
import { Link } from 'react-router-dom';

import strings from '../json/strings.json';

class StartConversationButton extends React.Component {
    render() {
        return <div id="StartConversationButton">
            <div className="button" children={strings.StartConversationButton.link} />
        </div>
    }
}

export default StartConversationButton;