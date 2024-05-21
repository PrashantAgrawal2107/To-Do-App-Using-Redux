
import * as redux from 'redux';
import { todoReducer } from './reducers/todoReducer';
import { combineReducers } from 'redux';
import { noteReducer } from './reducers/noteReducer';

const result = combineReducers({
    todo : todoReducer,
    note : noteReducer
})

export const store = redux.createStore(result);