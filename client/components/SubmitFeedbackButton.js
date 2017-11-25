import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import strings from '../json/strings.json';

class SubmitFeedbackButton extends React.Component {
    onClickSubmit = () => {
        const { rating, selectedBadges, selectedCriticisms } = this.props;
        console.log(rating);
        console.log(selectedBadges);
        console.log(selectedCriticisms);
        const { submitFeedback } = this.props;
        submitFeedback(rating, selectedBadges, selectedCriticisms);  
        this.props.history.push('/profile');
    }
    render() {
        const { onClickSubmit } = this;
        return <div id="SubmitFeedbackButton">
            <div className="button" children={strings.SubmitFeedbackButton.link} onClick={onClickSubmit} />
        </div>
    }
}

export default withRouter(SubmitFeedbackButton);