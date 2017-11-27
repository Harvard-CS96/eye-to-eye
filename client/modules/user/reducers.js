import * as types from './types';

let initialID = null,
    initialName = null,
    initialBadges = null;

if (window.user && window.user.facebook) {
    initialID = window.user.id;
    initialName = window.user.facebook.name;
    initialBadges = window.user.badges;
}

const initialState = {
    isAuthenticated: window.isAuthenticated,
    id: initialID,
    name: initialName,
    badges: initialBadges,
    passedSystemCheck: null
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
        case types.UPDATE_STATUS: {
            const { status } = data;
            return {
                ...state
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;