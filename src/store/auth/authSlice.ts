import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  name: string;
  email: string;
  access_token: string;
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  email: "",
  name: "",
  access_token: "",
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
      };
    },
  },
});

export const { authenticateUser } = authSlice.actions;
export default authSlice.reducer;
