import { createSlice } from "@reduxjs/toolkit";

export interface IPracticeTaskContent {
  title: string;
  description: string;
  id: string;
  submittedAt: Date;
  type: "resource" | "coding";
}

const initialState = {
  title: "",
  description: "",
  id: "",
  submittedAt: null,
  type: "resource",
};

const practiceTaskContentSlice = createSlice({
  name: "practice task content",
  initialState: initialState,
  reducers: {
    setPracticeTaskContent(_, action) {
      return action.payload;
    },
    updatePracticeTaskContent(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setPracticeTaskContent, updatePracticeTaskContent } =
  practiceTaskContentSlice.actions;
export default practiceTaskContentSlice.reducer;
