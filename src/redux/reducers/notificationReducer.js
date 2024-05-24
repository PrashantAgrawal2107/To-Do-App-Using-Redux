import { todoActions } from "./todoReducer";

const { createSlice } = require("@reduxjs/toolkit");


const initialState = {message:""};

const notificationSlice = createSlice({
    name : 'notification',
    initialState : initialState,
    reducers : {
        reset :(state , action) => {
            state.message="";
        }
    },
    // extraReducers : {
    //     "todo/addTodo" :(state,action) => {
    //         console.log('Inside xxxxx')
    //         state.message = 'Added Successfully'
    //     }
    // }
    // extraReducers : (builder)=>{
    //     builder.addCase(todoActions.addTodo , (state,action)=>{
    //         state.message = 'Added Successfully'
    //     })
    // }
    extraReducers : {
        [todoActions.addTodo] : (state,action)=>{
            state.message = 'Added Successfully'
        }
    }
})

export const notificationReducer = notificationSlice.reducer;
export const notificationSelector = (state) => state.notification.message // notification refers to the reducer definition in store.js
export const resetNotificattion = notificationSlice.actions.reset;