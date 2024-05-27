import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import {ADD_TODO, TOGGLE_TODO} from '../actions/todoActions';
import axios from 'axios';

const initialState = {
    todos : [
        {text:"Wake up at 9" , completed : true},
        {text:"Go to college" , completed : false}
    ]
}

// Performing asynchronous operations using createAsyncThunk() -->>

export const getInitialStateAsync = createAsyncThunk("todo/getInitialState" , (arg , thunkAPI)=>{
    axios.get("http://localhost:4100/api/todos")
        .then(res =>
           {
              console.log(res.data);
            //   dispatch(todoActions.setInitialState(res.data))
            thunkAPI.dispatch(todoActions.setInitialState(res.data));
           }
      );
})

export const addTodoAsync = createAsyncThunk("todo/addTodo" ,async (payload)=>{
        const response  = await fetch("http://localhost:4100/api/todos" , {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : {
                text : payload,
                completed : false
            }
        })

        return response.json();
})

// Creating reducer using Redux Toolkit -->>

const todoSlice = createSlice({
    name : 'todo',
    initialState : initialState,
    reducers : {
        setInitialState : (state,action) => {
            state.todos = [...action.payload]
        },
        addTodo : (state,action) =>{
             state.todos.push({
                text : action.payload,
                completed : false
             })
        },
        toggleTodo : (state,action)=>{
                state.todos.map((todo , i)=>{
                    if(i===action.payload){
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(addTodoAsync.fulfilled , (state , action)=>{
            console.log(action.payload);
            state.todos.push(action.payload);
        })
    }
})

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;

export const todoSelector = (state) => state.todo.todos; // todo refers to the todoSelector defined as todo in store.js

// export function todoReducer(state = initialState , action){
  
//     switch(action.type){
//         case ADD_TODO : {
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text : action.text,
//                         completed : false
//                     }
//                 ]
//             }
//         }
//         case TOGGLE_TODO : {
//             return {
//                 ...state,
//                 todos : state.todos.map((todo,i)=>{
//                     if(i===action.index){
//                         todo.completed = !todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         }
//         default : return state;
//     }
// }