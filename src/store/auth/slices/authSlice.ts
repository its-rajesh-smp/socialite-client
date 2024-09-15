import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { resetClient } from "../../../graphql/apollo.config";

export interface IAuthState {
  accessToken: string;
  isAuthenticated: boolean;
  isLoading?: boolean;
  email: string;
  name: string;
  id: string;
}

const defaultState: IAuthState = {
  accessToken: "",
  isAuthenticated: false,
  isLoading: true,
  email: "",
  id: "",
  name: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: defaultState,
  reducers: {
    authenticateUser: (_, action: PayloadAction<IAuthState>) => {
      localStorage.setItem("accessToken", action.payload.accessToken);
      // Since we are using apollo client, we need to reset the client
      // So that we can use the new token
      resetClient();

      return {
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    },

    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    logout: () => {
      localStorage.clear();
      resetClient();
      return { ...defaultState, isLoading: false };
    },
  },
});

export const { authenticateUser, setUserLoading, logout } = authSlice.actions;
export default authSlice.reducer;
