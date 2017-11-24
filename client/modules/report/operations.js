import axios from 'axios';
import * as actions from './actions';

const submitReport = (reportType) => dispatch => {
    console.log("Hit submit operation");
    console.log(reportType);
    //TODO: Add to and from userIDs
    return axios.post('/feedback/report', {from: '864a5f42-9306-45f4-8e40-58691f9445e0', to: '864a5f42-9306-45f4-8e40-58691f9445e0', kind: reportType})
        .then(function (response) {
            console.log(response);
            dispatch(actions.submitReport(report));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export {
    submitReport,
}