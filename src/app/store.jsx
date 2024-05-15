import {configureStore} from "@reduxjs/toolkit"
import {todoReducers} from "../features/todo/todoSlice.jsx"

export const store=configureStore({
    reducer:todoReducers
})