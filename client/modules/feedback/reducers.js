import * as types from './types';

const reducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case types.SUBMIT_FEEDBACK: {
            const { rating } = data;
            console.log(rating);
            return {
                ...state,
                rating: rating
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;