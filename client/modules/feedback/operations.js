import axios from 'axios';
import * as actions from './actions';

const submitFeedback = (rating, selectedBadges, selectedCriticisms) => dispatch => {
    console.log("OPERATION - SUBMIT FEEDBACK");
    console.log(rating);
    console.log(selectedBadges);
    console.log(selectedCriticisms);
    //TODO: Get rid of "from" parameter once db updates this.
    return axios.post('/chats', {from: '864a5f42-9306-45f4-8e40-58691f9445e0', badges: selectedBadges, criticisms: selectedCriticisms, stars: rating})
        .then(response => {
            console.log(response);
            dispatch(actions.submitFeedback(rating, selectedBadges, selectedCriticisms));
        })
        .catch(error => {
            console.log(error);
        });
}

const toggleBadge = actions.toggleBadge;

const toggleCriticism = actions.toggleCriticism;

const loadAllBadges = () => dispatch => {
    axios.get('/badges/list')
        .then(response => response.data)    
        .then(response => {
            console.log("OPERATIONS - LOAD ALL BADGES");
            console.log(response)
            dispatch(actions.loadAllBadges(response));
        })
        
}

const loadAllCriticisms = () => dispatch => {
    console.log("OPERATIONS - LOAD ALL CRITICISMS");
    dispatch(actions.loadAllCriticisms(["Could be funnier", "Could be nicer"]));
    // dispatch(actions.loadAllCriticisms([{_id: "5a15c4e9f36d28650ee82282", uuid: "2b7ea95c-bf5f-41d0-823d-8026b6d917f0", name: "Creative", id: null},{_id: "5a15c4f9f36d28650ee82289", uuid: "c75509e0-e443-45a8-b13c-2dbdfc73fd14", name: "Funny", id: null},{_id: "5a15c508f36d28650ee8228f", uuid: "6a636a5a-169e-4ed4-98a5-16bf89ea4093", name: "Friendly", id: null}]));
    // axios.get('/criticisms/list')
    //     .then(response => response.data)    
    //     .then(response => {
    //         console.log("OPERATIONS - LOAD ALL CRITICISMS");
    //         console.log(response);
    //         dispatch(actions.loadAllCriticisms(response));
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
        
}

export {
    submitFeedback,
    toggleBadge,
    loadAllBadges,
    toggleCriticism,
    loadAllCriticisms
}