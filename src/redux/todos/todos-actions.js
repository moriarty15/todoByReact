import { createAction } from "@reduxjs/toolkit";
import { ADDTODO, DELETETODO } from "./todos-types";
import { v4 as uuidv4 } from 'uuid';

export const addTodo = createAction(
    ADDTODO,
    (text) => {
        return {
            payload: {
                text,             
                id: uuidv4(),   
            }
        }
    }
)

export const deleteTodo = createAction(DELETETODO)