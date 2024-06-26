
// import * as redux from 'redux';
import { todoReducer } from './reducers/todoReducer';
// import { combineReducers } from 'redux';
import { noteReducer } from './reducers/noteReducer';
import { configureStore , getDefaultMiddleware} from '@reduxjs/toolkit';
import { notificationReducer } from './reducers/notificationReducer';
import loggerMiddleware from './middlewares/loggerMiddleware';

// const result = combineReducers({
//     todo : todoReducer,
//     note : noteReducer
// })

// export const store = redux.createStore(result);

// Creating store using Redux Toolkit -->>
export const store  = configureStore({
    reducer : {
        todo : todoReducer,
        note : noteReducer,
        notification : notificationReducer
    },
    middleware : [...getDefaultMiddleware() , loggerMiddleware]
})