import { createSlice } from "@reduxjs/toolkit";
import { CompilerTypes } from "../../../components/compiler/constants";

const COMPILER_DEFAULT_DATA = "COMPILER_DEFAULT_DATA";

const initialState = {
  currentCompilerType: CompilerTypes.static,
  openAIKey: "",
};

const codeCompilerSettingSlice = createSlice({
  name: "code compiler setting",
  initialState,
  reducers: {
    setSettingData: (state, action) => {
      const newState = { ...state, ...action.payload };
      localStorage.setItem(COMPILER_DEFAULT_DATA, JSON.stringify(newState));
      return newState;
    },
  },
});

export const { setSettingData } = codeCompilerSettingSlice.actions;
export default codeCompilerSettingSlice.reducer;
