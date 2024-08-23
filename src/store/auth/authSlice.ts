import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/auth";

export interface IAuthState {
  user: IUser | null;
  access_token: string;
  isAuthenticated: boolean | undefined;
  loadingUser?: boolean;
}

const initialState: IAuthState = {
  user: null,
  isAuthenticated: false,
  access_token: "",
  loadingUser: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (_, action: PayloadAction<IAuthState>) => {
      localStorage.setItem("accessToken", action.payload.access_token);
      return {
        ...action.payload,
        isAuthenticated: true,
        loadingUser: false,
      };
    },

    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.loadingUser = action.payload;
    },
  },
});

export const { authenticateUser, setUserLoading } = authSlice.actions;
export default authSlice.reducer;
