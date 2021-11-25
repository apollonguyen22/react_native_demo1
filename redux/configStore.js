import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {StudentReducer} from './reducer/StudentReducer';
import {CourseReducer} from './reducer/CourseReducer';
import {AccountReducer} from './reducer/AccountReducer';

const rootReducer = combineReducers({
    StudentReducer,
    CourseReducer,
    AccountReducer,
});

export const store = createStore(rootReducer,applyMiddleware(thunk));

