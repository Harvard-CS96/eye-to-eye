import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import BadgeSet from '../containers/BadgeSet';
import StartConversationButton from "../containers/StartConversationButton"
import LeaderSet from "../containers/LeaderSet"
import QuestionSet from './QuestionSet'
import { Link } from 'react-router-dom';
import Strings from '../json/strings.json';

class Profile extends React.Component {
    componentDidMount() {
        this.props.loadQuestions()
    }
    render() {
        console.log(this.props);
        const { questions } = this.props;
        return <div id="Profile">
        	{Strings.Profile.body}
            <QuestionSet questions={questions}/>
            <BadgeSet />
            <LeaderSet showLeaderboard={true}/>
            <StartConversationButton />
        </div>
    }
}

export default Profile;