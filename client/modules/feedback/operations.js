import axios from 'axios';
import * as actions from './actions';

//TODO: get user id
const submitFeedback = (rating) => dispatch => {
    console.log("Hit operation");
    console.log(rating);
    return axios.post('/chats', {from: 'test', badges: [], stars: rating})
        .then(function (response) {
            console.log(response);
            dispatch(actions.submitFeedback(rating));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export {
    submitFeedback
}