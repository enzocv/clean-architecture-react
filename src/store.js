import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/application/slices/userSlice';
import todoReducer from './Todos/application/slices/todosSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    todos: todoReducer
  }
});