import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/auth";

export interface IAuthState {
  user: IUser | null;
  accessToken: string;
  isAuthenticated: boolean;
  isLoading?: boolean;
}

const initialState: IAuthState = {
  user: null,
  accessToken: "",
  isAuthenticated: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (_, action: PayloadAction<IAuthState>) => {
      localStorage.setItem("accessToken", action.payload.accessToken);
      return {
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    },

    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { authenticateUser, setUserLoading } = authSlice.actions;
export default authSlice.reducer;
