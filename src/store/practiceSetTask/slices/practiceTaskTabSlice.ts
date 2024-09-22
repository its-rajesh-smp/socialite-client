import { practiceTaskTabs } from "@/constants/task.const";
import { createSlice } from "@reduxjs/toolkit";

const practiceTaskTabSlice = createSlice({
  name: "practice task tab",
  initialState: practiceTaskTabs.all,
  reducers: {
    setCurrentPracticeTaskTab: (_, action) => {
      return action.payload;
    },
  },
});

export const { setCurrentPracticeTaskTab } = practiceTaskTabSlice.actions;
export default practiceTaskTabSlice.reducer;
