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
        const { questions } = this.props;
        return <div id="Profile">
        	{Strings.Profile.body}
            <QuestionSet questions={questions}/>
<<<<<<< HEAD
            {/* TODO: Create different badget object */}
            <BadgeSet badgesDisplayed={['01','02','03']}/>
=======
            <BadgeSet />
>>>>>>> 2458d5bb3fc54d7b4ffc1b8d568cd73ba511beb2
            <LeaderSet showLeaderboard={true}/>
            <StartConversationButton />
        </div>
    }
}

export default Profile;