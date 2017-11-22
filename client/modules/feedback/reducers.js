import * as types from './types';

const initialState = {
    rating: null,
    selectedBadges: []
}

const reducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case types.SUBMIT_FEEDBACK: {
            const { rating } = data;
            console.log("Hit reducer");
            console.log(rating);
            return {
                ...state,
                rating: rating
            }
        }
        case types.TOGGLE_BADGE: {
            const { badgeId } = data;
            let selectedBadges = [...state.selectedBadges];
            var location = selectedBadges.map(x => x.badge).indexOf(badgeId);
            if (location === -1) {
                return state;
            }
            selectedBadges[location].enabled = !selectedBadges[location].enabled;
            return {
                ...state,
                selectedBadges: selectedBadges
            }
        }
        case types.LOAD_BADGES: {
            const { badges } = data;
            return {
                ...state,
                selectedBadges: badges.map(badge => ({
                    badge: badge.uuid,
                    enabled: false
                }))
            }
        }    
        default: {
            return state;
        }
    }
}

export default reducer;