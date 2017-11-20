import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import strings from '../json/strings.json';

class SubmitFeedbackButton extends React.Component {
    submitFeedback = () => {
        // TODO: Update rating/feedback here (call submitFeedback). Get rating as a parameter from Feedback.js.
        const { rating } = this.props;
        console.log(rating);
        this.props.history.push('/profile');
    }
    render() {
        const { submitFeedback } = this;
        return <div id="SubmitFeedbackButton">
            <div className="button" children={strings.SubmitFeedbackButton.link} onClick={submitFeedback} />
        </div>
    }
}

export default withRouter(SubmitFeedbackButton);