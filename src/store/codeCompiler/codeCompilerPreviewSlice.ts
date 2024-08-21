import { createSlice } from "@reduxjs/toolkit";

export const COLLAPSE_THRESHOLD = 8;

const initialState = {
  isCollapsedLeft: false,
  isCollapsedRight: false,
  currentLeftTabId: 0,
  currentRightTabId: 0,
};

const codeCompilerPreviewSlice = createSlice({
  name: "code compiler preview",
  initialState,
  reducers: {
    setCollapsedLeft(state) {
      state.isCollapsedLeft = true;
    },

    setCollapsedRight(state) {
      state.isCollapsedRight = true;
    },

    onSizeChangeLeft(state, action) {
      state.isCollapsedLeft = action.payload < COLLAPSE_THRESHOLD;
    },

    onSizeChangeRight(state, action) {
      state.isCollapsedRight = action.payload < COLLAPSE_THRESHOLD;
    },

    setPreviewTabLeft(state, action) {
      state.currentLeftTabId = action.payload;
      state.isCollapsedLeft = false;
    },

    setPreviewTabRight(state, action) {
      state.currentRightTabId = action.payload;
      state.isCollapsedRight = false;
    },
  },
});

export const {
  setPreviewTabLeft,
  setPreviewTabRight,
  onSizeChangeLeft,
  onSizeChangeRight,
  setCollapsedLeft,
  setCollapsedRight,
} = codeCompilerPreviewSlice.actions;

export default codeCompilerPreviewSlice.reducer;
