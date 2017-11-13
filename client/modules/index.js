import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import counter from './counter';
import questions from './questions';

export default combineReducers({
    router: routerReducer,
    user,
    questions,
    counter
})