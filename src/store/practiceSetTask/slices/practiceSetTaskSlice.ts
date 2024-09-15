import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IPracticeQuestion, IPracticeSet } from "../../../types/practice";

const initialState = {
  practiceTasks: [] as IPracticeQuestion[],
  currentPracticeSet: {} as IPracticeSet,
};

const practiceSetTaskSlice = createSlice({
  name: "practice set task",
  initialState: initialState,
  reducers: {
    /**
     * set practice set tasks
     * @param state
     * @param action
     * @returns
     */
    setPracticeSetTasks: (state, action) => {
      state.practiceTasks = action.payload.practiceTasks;
      state.currentPracticeSet = action.payload.currentPracticeSet;
      return state;
    },

    /**
     * add practice set task
     * @param state
     * @param action
     * @returns
     */
    addPracticeSetTask: (state, action: PayloadAction<IPracticeQuestion>) => {
      state.practiceTasks.push(action.payload);
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
      const index = state.practiceTasks.findIndex(
        (task) => task.id === action.payload,
      );
      state.practiceTasks.splice(index, 1);
      return state;
    },

    /**
     * update a practice set task
     * @param state
     * @param action
     * @returns
     */
    updatePracticeSetTask: (state, action) => {
      const updatedTaskList = state.practiceTasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            ...action.payload,
          };
        }
        return task;
      });

      state.practiceTasks = updatedTaskList;

      return state;
    },

    /**
     * clear practice set tasks
     * @param state
     * @returns
     */
    clearPracticeSetTasks: () => {
      return {
        currentPracticeSet: {} as IPracticeSet,
        practiceTasks: [] as IPracticeQuestion[],
      };
    },

    /**
     * update current practice set
     * @param state
     * @param action
     * @returns
     */
    updateCurrentPracticeSet: (state, action) => {
      state.currentPracticeSet = {
        ...state.currentPracticeSet,
        ...action.payload,
      };
      return state;
    },
  },
});

export const {
  addPracticeSetTask,
  deletePracticeSetTask,
  setPracticeSetTasks,
  updatePracticeSetTask,
  clearPracticeSetTasks,
  updateCurrentPracticeSet,
} = practiceSetTaskSlice.actions;

export default practiceSetTaskSlice.reducer;
