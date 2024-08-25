import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  accessToken: string;
  isAuthenticated: boolean;
  isLoading?: boolean;
  email: string;
  name: string;
  id: string;
}

const initialState: IAuthState = {
  accessToken: "",
  isAuthenticated: false,
  isLoading: true,
  email: "",
  id: "",
  name: "",
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
