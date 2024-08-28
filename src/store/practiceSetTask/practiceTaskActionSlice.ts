import { createSlice } from "@reduxjs/toolkit";
import { accordionStates } from "../../constants/common.const";

const initialState = {
  editing: false,
  practiceSetDescAccordionState: accordionStates.collapsed,
};

const practiceTaskActionSlice = createSlice({
  name: "practice task action",
  initialState: initialState,
  reducers: {
    setPracticeTaskEditing: (state, action) => {
      state.editing = action.payload;
    },
    toggleEditing: (state) => {
      state.editing = !state.editing;
    },
    setPracticeSetDescAccordionState: (state, action) => {
      state.practiceSetDescAccordionState = action.payload;
    },
  },
});

export const {
  setPracticeTaskEditing,
  toggleEditing,
  setPracticeSetDescAccordionState,
} = practiceTaskActionSlice.actions;
export default practiceTaskActionSlice.reducer;
