import { createSlice } from "@reduxjs/toolkit";
import { practiceTabs } from "../../constants/practice.const";

const practiceSetSlice = createSlice({
  name: "practice set tab",
  initialState: practiceTabs.all,
  reducers: {},
});

export const {} = practiceSetSlice.actions;
export default practiceSetSlice.reducer;
