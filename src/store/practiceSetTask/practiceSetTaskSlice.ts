import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IPracticeQuestion } from "../../types/practice";

const practiceSetTaskSlice = createSlice({
  name: "practice set task",
  initialState: [] as IPracticeQuestion[],
  reducers: {
    /**
     * set practice set tasks
     * @param state
     * @param action
     * @returns
     */
    setPracticeSetTasks: (
      state,
      action: PayloadAction<IPracticeQuestion[]>,
    ) => {
      state = action.payload;
      return state;
    },

    /**
     * add practice set task
     * @param state
     * @param action
     * @returns
     */
    addPracticeSetTask: (state, action: PayloadAction<IPracticeQuestion>) => {
      state.push(action.payload);
      return state;
    },

    /**
     * delete a practice set task
     * @param state
     * @param action
     * @returns
     */
    deletePracticeSetTask: (
      state,
      action: PayloadAction<IPracticeQuestion["id"]>,
    ) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
      return state;
    },

    /**
     * update a practice set task
     * @param state
     * @param action
     * @returns
     */
    updatePracticeSetTask: (
      state,
      action: PayloadAction<IPracticeQuestion>,
    ) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index] = action.payload;
      return state;
    },

    /**
     * clear practice set tasks
     * @param state
     * @returns
     */
    clearPracticeSetTasks: () => {
      return [];
    },
  },
});

export const {
  addPracticeSetTask,
  deletePracticeSetTask,
  setPracticeSetTasks,
  updatePracticeSetTask,
  clearPracticeSetTasks,
} = practiceSetTaskSlice.actions;

export default practiceSetTaskSlice.reducer;
