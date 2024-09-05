import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isContentEditable: false,
  isSidebarOpened: false,
};

const practiceTaskContentActionSlice = createSlice({
  name: "practice task action",
  initialState: initialState,
  reducers: {
    setPracticeTaskContentEditable: (state, action) => {
      state.isContentEditable = action.payload;
    },
    setPracticeSetSidebar: (state, action) => {
      state.isSidebarOpened = action.payload;
    },
  },
});

export const { setPracticeTaskContentEditable, setPracticeSetSidebar } =
  practiceTaskContentActionSlice.actions;
export default practiceTaskContentActionSlice.reducer;
