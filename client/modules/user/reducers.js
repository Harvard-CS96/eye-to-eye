import * as types from './types';

const initialState = {
    isLoggedIn: false,
    id: null
}

const reducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case types.LOGIN: {
            const { id } = data;
            return {
                ...state,
                isLoggedIn: true,
                id: id
            }
        }
        case types.LOGOUT: {
            state.isLoggedIn = false;
            state.id = null;
            return {
                ...state,
                isLoggedIn: false,
                id: null
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;