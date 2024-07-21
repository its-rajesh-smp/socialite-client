import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSteps } from "../../constants/auth.const";

export interface IAuthState {
  currentStep: number;
}

const initialState: IAuthState = {
  currentStep: AuthSteps.LOGIN,
};

const authStepSlice = createSlice({
  name: "auth-step",
  initialState,
  reducers: {
    setAuthStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
  },
});

export const { setAuthStep } = authStepSlice.actions;
export default authStepSlice.reducer;
