import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {StudentReducer} from './reducer/StudentReducer';
import {CourseReducer} from './reducer/CourseReducer';
import {AccountReducer} from './reducer/AccountReducer';
import { LoadingReducer } from './reducer/LoadingReducer';
import {LoadingToastReducer} from './reducer/LoadingToastReducer';

const rootReducer = combineReducers({
    StudentReducer,
    CourseReducer,
    AccountReducer,
    LoadingReducer,
    LoadingToastReducer,
});

export const store = createStore(rootReducer,applyMiddleware(thunk));

