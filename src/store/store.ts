import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import authStepSlice from "./auth/authStepSlice";

export const store = configureStore({
  reducer: {
    authSlice,
    authStepSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
