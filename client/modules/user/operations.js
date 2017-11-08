import axios from 'axios';
import * as actions from './actions';

const login = () => dispatch => {
    return axios('/user/login')
        .then(response => response.data)
        .then(data => {
            console.log(data)
            const { id } = data;
            dispatch(actions.login(id))
        })
}

const logout = actions.logout;

export {
    login, 
    logout
}