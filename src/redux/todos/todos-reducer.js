import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addTodo, deleteTodo } from "./todos-actions";

const itemReducer = createReducer([], {
    [addTodo]: (state, {payload}) => {
        return [payload, ...state]
    },
    [deleteTodo]: (state, {payload}) => {
        state = state.filter((item) => item.id !== payload);
        return state    
    }
})

export default combineReducers({
    items: itemReducer,
})
