import * as types from './types';

const initialID = window.user ?
    window.user.id :
    null

const initialName = window.user && window.user.facebook ?
    window.user.facebook.name :
    null

const initialState = {
    isAuthenticated: window.isAuthenticated,
    id: initialID,
    name: initialName
}

const reducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case types.LOGIN: {
            const { id } = data;
            return {
                ...state,
                isAuthenticated: true,
                id: id
            }
        }
        case types.LOGOUT: {
            state.isAuthenticated = false;
            state.id = null;
            return {
                ...state,
                isAuthenticated: false,
                id: null
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;