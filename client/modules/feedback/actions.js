import * as types from './types';

const submitFeedback = (newRating) => ({
    type: types.SUBMIT_FEEDBACK,
    data: {
        newRating
    }
})

export {
    submitFeedback
}