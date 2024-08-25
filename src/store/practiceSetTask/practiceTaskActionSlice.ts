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
    setEditing: (state, action) => {
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

export const { setEditing, toggleEditing, setPracticeSetDescAccordionState } =
  practiceTaskActionSlice.actions;
export default practiceTaskActionSlice.reducer;
