import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import FeedbackBadgeSet from '../containers/FeedbackBadgeSet';
import CriticismSet from '../containers/CriticismSet'
import ReportAbuseButton from '../containers/ReportAbuseButton';
import SubmitFeedbackButton from '../containers/SubmitFeedbackButton';

import strings from '../json/strings.json';

class Feedback extends React.Component {
    constructor() {
        super();
        this.state = {
            rating: null
        };
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }
    render() {
        console.log(this.props);
        return <div id="Feedback">
            <h2>Feedback</h2>
            <div>
                {strings.Feedback.body}
            </div>
            <StarRatingComponent 
                    name="user_star_rating" 
                    starCount={5}
                    onStarClick={this.onStarClick.bind(this)}
                />
            {/* TODO: Get badges and criticisms from database once branch merged. */}
            <FeedbackBadgeSet />
            <CriticismSet />
            <ReportAbuseButton/>
            <SubmitFeedbackButton rating={this.state.rating}/>
        </div>
    }
}

export default Feedback;