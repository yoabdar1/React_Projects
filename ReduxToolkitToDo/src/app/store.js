import { configureStore } from "@reduxjs/toolkit"; // configureStore is used to create a store and imported from @reduxjs/toolkit
import todoReducer from "../features/todo/todoSlice";

// with help of this method we are exporting one variable ( like store ) configureStore normally takes an object

export const store = configureStore({
  reducer: todoReducer,
});
