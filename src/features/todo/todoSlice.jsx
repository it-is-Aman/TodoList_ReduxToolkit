import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    todos: [{ id: 1, text: "message" }]
}

const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={id:nanoid(),text:action.payload}
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export const todoReducers = todoSlice.reducer