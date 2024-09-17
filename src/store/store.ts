import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./auth/authenticationSlice";
import practiceSetTaskSlice from "./practiceSetTask/slices/practiceSetTaskSlice";
import taskSlice from "./practiceSetTask/taskSlice";
import sidebarSlice from "./sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    ...authenticationSlice,
    practiceSetTaskSlice,
    sidebarSlice,
    ...taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
