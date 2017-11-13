import React from 'react';

class Question extends React.Component {
    render() {

        return <div id="Question">
            <h1>{this.props.questionId}</h1>
        </div>
    }
}

export default Question;