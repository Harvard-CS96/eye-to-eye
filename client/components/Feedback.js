import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import BadgeSet from '../containers/BadgeSet';
import CriticismSet from '../containers/CriticismSet'
import ReportAbuseButton from '../containers/ReportAbuseButton';

import strings from '../json/strings.json';

class Feedback extends React.Component {
    render() {
        return <div id="Feedback">
            <h2>Feedback</h2>
            <div>
                {strings.Feedback.body}
            </div>
            <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                />
            <BadgeSet badgesDisplayed={['01','02','03']}/>
            <CriticismSet criticismsDisplayed={['Impolite', 'Too much hairgel']}/>
            <ReportAbuseButton/>
        </div>
    }
}

export default Feedback;