import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/auth";

export interface IPracticeTaskContent {
  title: string;
  description: string;
  id: string;
  submittedAt: Date | null;
  type: "resource" | "coding";
  user: IUser | null;
}

const initialState: IPracticeTaskContent = {
  title: "",
  description: "",
  id: "",
  submittedAt: null,
  type: "resource",
  user: null,
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
