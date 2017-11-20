import * as types from './types';

const login = (id) => ({
    type: types.LOGIN,
    data: {
        id
    } 
})

const logout = () => ({
    type: types.LOGOUT
})

const submitFeedback = (userId, oldRating, newRating, numConversations) => ({
    type: types.SUBMIT_FEEDBACK,
    data: {
        userId,
        oldRating,
        newRating,
        numConversations
    }
})

export {
    login,
    logout,
    submitFeedback
}