import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import BadgeSet from '../containers/BadgeSet';

import strings from '../json/strings.json';

class Feedback extends React.Component {
    render() {
        return <div id="Feedback">
            <h1>Feedback</h1>
            <div>
                {strings.Feedback.body}
            </div>
            <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={3}
                />
            <BadgeSet badgesDisplayed={['01','02','03']}/>
        </div>
    }
}

export default Feedback;