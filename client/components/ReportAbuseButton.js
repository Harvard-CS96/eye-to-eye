import React from 'react';
import { Link } from 'react-router-dom';

import strings from '../json/strings.json';

class ReportAbuseButton extends React.Component {
    render() {
        return <div id="ReportAbuseButton">
            <div className="button" children={strings.ReportAbuseButton.link} />
        </div>
    }
}

export default ReportAbuseButton;