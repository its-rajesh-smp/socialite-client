import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/auth";
import { ITaskTag } from "../../types/practice";

export interface IPracticeTaskContent {
  title: string;
  description: string;
  id: string;
  submittedAt: Date | null;
  type: "resource" | "coding";
  user: IUser | null;
  taskTags: ITaskTag[];
}

const initialState = {
  currentTask: {
    title: "",
    description: "",
    id: "",
    submittedAt: null,
    type: "resource",
    user: null,
    taskTags: [],
  } as IPracticeTaskContent,
  updatedTask: {
    title: "",
    description: "",
    id: "",
    submittedAt: null,
    type: "resource",
    user: null,
    taskTags: [],
  } as IPracticeTaskContent,
};

const practiceTaskContentSlice = createSlice({
  name: "practice task content",
  initialState: initialState,
  reducers: {
    setPracticeTaskContent(state, action) {
      state.currentTask = action.payload;
      state.updatedTask = action.payload;
      return state;
    },

    updatePracticeTaskContent(state, action) {
      state.updatedTask = {
        ...state.updatedTask,
        ...action.payload,
      };
      return state;
    },
  },
});

export const { setPracticeTaskContent, updatePracticeTaskContent } =
  practiceTaskContentSlice.actions;
export default practiceTaskContentSlice.reducer;
