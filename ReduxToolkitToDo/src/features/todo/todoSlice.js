
// we are creating reducers here in this file
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({ // here name, initialState and reducers are three properties we give as per docs
  name: "todo",
  initialState,
  reducers: { // this is reducer which is object which contains properties and functions (addTodo & removeTodo is property here with function)
    addTodo: (state, action) => { // every reducer has two parameters access state and action
      const todo = {
        id: nanoid(),
        text: action.payload, // payload is object    action.payload.text
      }
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
