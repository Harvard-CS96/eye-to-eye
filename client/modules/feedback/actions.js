import * as types from './types';

const submitFeedback = (newRating) => ({
    type: types.SUBMIT_FEEDBACK,
    data: {
        newRating
    }
})

const toggleBadge = (badgeId) => ({
    type: types.TOGGLE_BADGE,
    data: {
        badgeId
    }
})

export {
    submitFeedback,
    toggleBadge
}