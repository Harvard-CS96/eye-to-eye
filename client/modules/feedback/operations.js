import axios from 'axios';
import * as actions from './actions';

const submitFeedback = (rating) => dispatch => {
    console.log("Hit operation");
    console.log(rating);
    return axios.post('/chats', {from: '864a5f42-9306-45f4-8e40-58691f9445e0', badges: [], stars: rating})
        .then(function (response) {
            console.log(response);
            dispatch(actions.submitFeedback(rating));
        })
        .catch(function (error) {
            console.log(error);
        });
}
const toggleBadge = actions.toggleBadge;
const toggleCriticism = actions.toggleCriticism;
const loadAllBadges = () => dispatch => {
    axios.get('/badges/list')
        .then(response => response.data)    
        .then(response => {
            console.log(response)
            dispatch(actions.loadAllBadges(response))
        })
        
}

export {
    submitFeedback,
    toggleBadge,
    loadAllBadges,
    toggleCriticism
}