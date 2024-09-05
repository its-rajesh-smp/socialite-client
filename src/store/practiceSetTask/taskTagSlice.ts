import { createSlice } from "@reduxjs/toolkit";
import { ITaskTag } from "../../types/practice";

const initialState = {
  allTaskTags: [] as ITaskTag[],
  currentTaskTags: [] as ITaskTag[],
};

const taskTagSlice = createSlice({
  name: "task tag",
  initialState: initialState,
  reducers: {
    setAllTaskTags(state, action) {
      state.allTaskTags = action.payload;
      return state;
    },

    setCurrentTaskTags(state, action) {
      state.currentTaskTags = action.payload;
      return state;
    },

    addToCurrentTaskTag(state, action) {
      state.currentTaskTags.push(action.payload);
      return state;
    },

    deleteACurrentTaskTag(state, action) {
      state.currentTaskTags = state.currentTaskTags.filter(
        (tag) => tag.name !== action.payload,
      );
      return state;
    },

    addToAllTaskTag(state, action) {
      state.allTaskTags.push(action.payload);
      return state;
    },
  },
});

export const {
  addToAllTaskTag,
  addToCurrentTaskTag,
  deleteACurrentTaskTag,
  setAllTaskTags,
  setCurrentTaskTags,
} = taskTagSlice.actions;

export default taskTagSlice.reducer;
