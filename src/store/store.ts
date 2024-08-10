import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import authStepSlice from "./auth/authStepSlice";
import practiceSetTaskSlice from "./practiceSetTask/practiceSetTaskSlice";

export const store = configureStore({
  reducer: {
    authSlice,
    authStepSlice,
    practiceSetTaskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
