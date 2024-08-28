import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isContentEditable: false,
};

const practiceTaskContentActionSlice = createSlice({
  name: "practice task action",
  initialState: initialState,
  reducers: {
    setPracticeTaskContentEditable: (state, action) => {
      state.isContentEditable = action.payload;
    },
  },
});

export const { setPracticeTaskContentEditable } =
  practiceTaskContentActionSlice.actions;
export default practiceTaskContentActionSlice.reducer;
