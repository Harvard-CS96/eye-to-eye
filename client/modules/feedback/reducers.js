import * as types from './types';

const initialState = {
    rating: null,
    selectedBadges: [],
    selectedCriticisms: []
}

const reducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case types.SUBMIT_FEEDBACK: {
            const { rating } = data;
            console.log("Hit reducer for submitting feedback");
            console.log(rating);
            return {
                ...state,
                rating: rating
            }
        }
        case types.TOGGLE_BADGE: {
            const { badgeId } = data;
            let { selectedBadges } = [state.selectedBadges];
            var location = selectedBadges.indexOf(badgeId);
            if (location == -1) {
                selectedBadges.push(badgeId);
            }
            else {
                selectedBadges.splice(location, 1);
            }
            console.log("Hit reducer for toggling badge");
            console.log(selectedBadges);
            return {
                ...state,
                selectedBadges: selectedBadges
            }
        }
        case types.TOGGLE_CRITICISM: {
            const { criticismId } = data;
            let { selectedCriticisms } = [state.selectedCriticisms];
            var location = selectedCriticisms.indexOf(criticismId);
            if (location == -1) {
                selectedCriticisms.push(criticismId);
            }
            else {
                selectedCriticisms.splice(location, 1);
            }
            console.log("Hit reducer for toggling criticism");
            console.log(selectedCriticisms);
            return {
                ...state,
                selectedCriticisms: selectedCriticisms
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;