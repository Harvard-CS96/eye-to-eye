import React from 'react';
import { Link } from 'react-router-dom';

import strings from '../json/strings.json';

class ReportAbuse extends React.Component {
    render() {
        return <div id="ReportAbuse">
            <div className="button" children={strings.ReportAbuse.link} />
        </div>
    }
}

export default ReportAbuse;