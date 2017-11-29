import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import counter from './counter';
import questions from './questions';
import feedback from './feedback';

export default combineReducers({
    router: routerReducer,
    user,
    questions,
    counter,
    feedback
})