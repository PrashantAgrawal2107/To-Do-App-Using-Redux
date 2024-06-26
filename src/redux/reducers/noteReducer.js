// import { ADD_NOTE , DELETE_NOTE } from "../actions/noteActions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes:[{text:"Hii Mitron" , createdOn: new Date()}]
}

const noteSlice = createSlice({
    name : 'note',
    initialState : initialState,
    reducers : {
        addNote : (state,action) =>{
             state.notes.push({
                text : action.payload,
                createdOn : new Date()
             })
        },
        deleteNote : (state,action)=>{
                state.notes.splice(action.payload,1);
        }
    }
})

export const noteReducer = noteSlice.reducer;
export const noteActions = noteSlice.actions;


export const noteSelector = (state) => state.note.notes; // note refers to the noteReducer defined as note in store.js
// export function noteReducer(state=initialState , action){

//     switch(action.type){
//         case ADD_NOTE : {
//             return {
//                 ...state,
//                 notes:[
//                     ...state.notes,
//                     {
//                         text : action.text,
//                         createdOn : new Date()
//                     }
//                 ]
//             }
//         }

//         case DELETE_NOTE : {
//             state.notes.splice(action.index,1);
//             return {
//                 ...state,
//                 notes : [
//                     ...state.notes
//                 ]
//             }
//         }

//         default : 
//               return state;
//     }
// }