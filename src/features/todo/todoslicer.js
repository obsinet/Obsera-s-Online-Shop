import { createSlice } from "@reduxjs/toolkit";
import { addToDo } from "./../../actions/index";
const intiaState = {
  tasks: [],
};
const TodoSlice = createSlice({
  name: "todo",
  intiaState,
  reducers: {
    addToDo: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});
export const { addToDo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
