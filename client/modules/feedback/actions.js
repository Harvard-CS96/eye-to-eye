import * as types from './types';

const submitFeedback = (rating, selectedBadges) => ({
    type: types.SUBMIT_FEEDBACK,
    data: {
        rating,
        selectedBadges
    }
})

const toggleBadge = (badgeId) => ({
    type: types.TOGGLE_BADGE,
    data: {
        badgeId
    }
})

const toggleCriticism = (criticismId) => ({
    type: types.TOGGLE_CRITICISM,
    data: {
        criticismId
    }
})

const loadAllBadges = (badges) => ({
    type: types.LOAD_BADGES,
    data: {
        badges
    }
})

export {
    submitFeedback,
    toggleBadge,
    toggleCriticism,
    loadAllBadges
}