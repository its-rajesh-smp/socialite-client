import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import authStepSlice from "./auth/authStepSlice";
import practiceSetTaskSlice from "./practiceSetTask/practiceSetTaskSlice";
import codeCompilerPreviewSlice from "./others/codeCompiler/codeCompilerPreviewSlice";
import codeCompilerSettingSlice from "./others/codeCompiler/codeCompilerSettingSlice";

export const store = configureStore({
  reducer: {
    authSlice,
    authStepSlice,
    practiceSetTaskSlice,
    codeCompilerPreviewSlice,
    codeCompilerSettingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
