import React from 'react';
// import StarRatingComponent from 'react-star-rating-component';
// import BadgeSet from '../containers/BadgeSet';
import QuestionSet from '../containers/QuestionSet'

import { Link } from 'react-router-dom';

import Strings from '../json/strings.json';

class Profile extends React.Component {
    render() {
        return <div id="Profile">
        	{Strings.Profile.body}
            <QuestionSet />
        </div>
    }
}

export default Profile;