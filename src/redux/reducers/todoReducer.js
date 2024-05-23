import { createSlice } from '@reduxjs/toolkit';
// import {ADD_TODO, TOGGLE_TODO} from '../actions/todoActions';

const initialState = {
    todos : [
        {text:"Wake up at 9" , completed : true},
        {text:"Go to college" , completed : false}
    ]
}

// Creating reducer using Redux Toolkit -->>

const todoSlice = createSlice({
    name : 'todo',
    initialState : initialState,
    reducers : {
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
    }
})

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;

export const todoSelector = (state) => state.todo.todos;

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