import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import strings from '../json/strings.json';

//TODO Deprecate
class SubmitFeedbackButton extends React.Component {
    submitFeedback = () => {
        // TODO: Update rating/feedback here (call submitFeedback).
        const { rating } = this.props;
        console.log(rating);
        this.props.submitFeedback(rating);  
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