import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Strings from '../json/strings.json';
import { ReactMic } from 'react-mic';

class SystemCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false,
            blobURL: null
        }
    }

    startRecording = () => {
        this.setState({
            record: true
        });
    }

    stopRecording = () => {
        this.setState({
            record: false
        });
    }

    onStop = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob);        
        this.setState({
            blobURL: recordedBlob.blobURL
        });
    }

    onReturn = () => {
        this.props.history.push('/profile');
    }

    onContinue = () => {
        this.props.updateStatus();
        this.props.history.push('/conversation');
    }

    render() {
        const { passedSystemCheck } = this.props;
        console.log(passedSystemCheck);
        return <div id="SystemCheck">
        {/* TODO: Include video face detection check here. */}
        {/* TODO: Add proceed button that checks if all tests done. */}
            <div>
                <ReactMic
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    strokeColor="#000000"
                    backgroundColor="#eeeeee" />
                    <br/>
                <button onClick={this.startRecording} type="button">Start</button>
                <button onClick={this.stopRecording} type="button">Stop</button>
                <div><audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio></div>
            </div>
        <div className="button" children="Return To Profile" onClick={this.onReturn} />
        <div className="button" children="Continue" onClick={this.onContinue} />
        </div>
    }
}

export default withRouter(SystemCheck);

// import React from 'react';
// import { Link, withRouter } from 'react-router-dom';

// import strings from '../json/strings.json';

// class ReportAbuseButton extends React.Component {
//     goToAbuse = () => {
//         //TODO: Link to report abuse screen.
//         this.props.history.push('/report_abuse');
//     }
//     render() {
//         const { goToAbuse } = this;
//         return <div id="ReportAbuseButton">
//             <div className="button" children={strings.ReportAbuseButton.link} onClick={goToAbuse} />
//         </div>
//     }
// }

// export default withRouter(ReportAbuseButton);