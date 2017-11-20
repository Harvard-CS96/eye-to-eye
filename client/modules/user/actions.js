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

export {
    login,
    logout
}