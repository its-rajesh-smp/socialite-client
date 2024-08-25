import { createSlice } from "@reduxjs/toolkit";
import { practiceTabs } from "../../constants/practice.const";

const practiceSetTabSlice = createSlice({
  name: "practice set tab",
  initialState: practiceTabs.all,
  reducers: {
    setCurrentPracticeSetTab: (_, action) => {
      return action.payload;
    },
  },
});

export const { setCurrentPracticeSetTab } = practiceSetTabSlice.actions;
export default practiceSetTabSlice.reducer;
