import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCollapsed_left: false,
  isCollapsed_right: false,
  currentPreviewIndex_left: 0,
  currentPreviewIndex_right: 0,
};

const codeCompilerPreviewSlice = createSlice({
  name: "code compiler preview",
  initialState,
  reducers: {
    setCollapsed_left(state) {
      state.isCollapsed_left = true;
    },

    setCollapsed_right(state) {
      state.isCollapsed_right = true;
    },

    onSizeChange_left(state, action) {
      if (action.payload < 8) {
        state.isCollapsed_left = true;
      } else {
        state.isCollapsed_left = false;
      }
    },

    onSizeChange_right(state, action) {
      if (action.payload < 8) {
        state.isCollapsed_right = true;
      } else {
        state.isCollapsed_right = false;
      }
    },

    setPreviewIndex_left(state, action) {
      state.currentPreviewIndex_left = action.payload;
      state.isCollapsed_left = false;
    },

    setPreviewIndex_right(state, action) {
      state.currentPreviewIndex_right = action.payload;
      state.isCollapsed_right = false;
    },
  },
});

export const {
  setPreviewIndex_left,
  setPreviewIndex_right,
  onSizeChange_left,
  onSizeChange_right,
  setCollapsed_left,
  setCollapsed_right,
} = codeCompilerPreviewSlice.actions;
export default codeCompilerPreviewSlice.reducer;
