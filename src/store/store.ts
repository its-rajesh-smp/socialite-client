import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import authStepSlice from "./auth/authStepSlice";
import codeCompilerPreviewSlice from "./codeCompiler/codeCompilerPreviewSlice";
import codeCompilerSettingSlice from "./codeCompiler/codeCompilerSettingSlice";
import practiceSetTaskSlice from "./practiceSetTask/practiceSetTaskSlice";
import practiceTaskActionSlice from "./practiceSetTask/practiceTaskActionSlice";
import practiceTaskContentActionSlice from "./practiceTaskContent/practiceTaskContentActionSlice";
import practiceTaskContentSlice from "./practiceTaskContent/practiceTaskContentSlice";
import sidebarSlice from "./sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    authSlice,
    authStepSlice,
    practiceSetTaskSlice,
    codeCompilerPreviewSlice,
    codeCompilerSettingSlice,
    sidebarSlice,
    practiceTaskActionSlice,
    practiceTaskContentSlice,
    practiceTaskContentActionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
