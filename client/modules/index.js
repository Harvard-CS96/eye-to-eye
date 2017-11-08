import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import counter from './counter';


export default combineReducers({
    router: routerReducer,
    user,
    counter
})