import { createSlice } from '@reduxjs/toolkit';
import type { Todo } from '@/interface';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [] as Todo[],
  },

  reducers: {
    addTodo: (state, action: { payload: Todo }) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action: { payload: Todo }) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      state.todos[index] = { ...state.todos[index], ...action.payload };
    },
    deleteTodo: () => {},
    completeTodo: (state, action: { payload: string }) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      const [completeTodo] = state.todos.splice(index, 1); // 예시: [1,2,3,4,5].splice(2,1) -> [1,2,4,5]
      completeTodo.completed = true;
      state.todos.push(completeTodo);
    },
  },
});

export const { addTodo, updateTodo, completeTodo, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
