import React from 'react';
//import SubmitAbuseButton from '../containers/SubmitAbuseButton';
import { withRouter, Link } from 'react-router-dom';

import strings from '../json/strings.json';
import DiscreteQuestion from '../containers/DiscreteQuestion.js'

class ReportAbuse extends React.Component {
    constructor() {
        super();
        this.state = {
            abuseType: "nudity",
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submitReport(this.state.abuseType);
    }

    handleChange(event) {
        this.setState({abuseType: event.target.value});
    }

    render() {
        return <div id="ReportAbuse" className="Question DiscreteQuestion">
            <h1>Report Abuse</h1>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                <select value={this.state.abuseType} onChange={this.handleChange.bind(this)}>
                    <option value="nudity">nudity</option>
                    <option value="offensive">offensive language</option>
                    <option value="other">other</option>
                </select>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
        //log who abuse is from and to
    }
}

export default withRouter(ReportAbuse);