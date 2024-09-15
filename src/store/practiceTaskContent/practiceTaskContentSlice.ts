import { createSlice } from "@reduxjs/toolkit";
import { IPracticeTaskContent } from "../../types/practice";

const defaultTask = {
  title: "",
  description: "",
  id: "",
  submittedAt: null,
  type: "resource",
  user: null,
  taskTags: [],
};

const initialState = {
  currentTask: defaultTask as IPracticeTaskContent,
  updatedTask: defaultTask as IPracticeTaskContent,
};

const practiceTaskContentSlice = createSlice({
  name: "practice task content",
  initialState: initialState,
  reducers: {
    /**
     * function set practice task
     * @param state
     * @param action
     * @returns
     */
    setPracticeTaskContent(state, action) {
      state.currentTask = action.payload;
      state.updatedTask = action.payload;
      return state;
    },

    /**
     * function update task after submit
     * @param state
     * @param action
     * @returns
     */
    updateTaskAfterSubmit(state, action) {
      state.currentTask = {
        ...state.currentTask,
        ...action.payload,
      };
      state.updatedTask = {
        ...state.updatedTask,
        ...action.payload,
      };
      return state;
    },

    /**
     * function to update practice task
     * @param state
     * @param action
     * @returns
     */
    updatePracticeTaskContent(state, action) {
      state.updatedTask = {
        ...state.updatedTask,
        ...action.payload,
      };
      return state;
    },
  },
});

export const {
  setPracticeTaskContent,
  updatePracticeTaskContent,
  updateTaskAfterSubmit,
} = practiceTaskContentSlice.actions;
export default practiceTaskContentSlice.reducer;
