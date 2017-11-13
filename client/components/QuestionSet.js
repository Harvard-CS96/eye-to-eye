import React from 'react';
import { Link } from 'react-router-dom';

import strings from '../json/strings.json';
import Question from '../components/Question.js'

class QuestionSet extends React.Component {
    render() {
        return <div id="QuestionSet">
	        <Question questionId="Should NFL players be forced to stand?" />
	        <Question questionId="Should we enact more gun regulation?" />

        </div>
    }
}

export default QuestionSet;