import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSteps } from "../../constants/auth.const";
import guestRoutes from "../../router/paths/guest.routes";

export interface IAuthStep {
  currentStep: number;
}

const initialState: IAuthStep = {
  currentStep:
    window.location.pathname === guestRoutes.LOGIN
      ? AuthSteps.LOGIN
      : AuthSteps.REGISTER,
};

const authStepSlice = createSlice({
  name: "auth step",
  initialState,
  reducers: {
    setAuthStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
  },
});

export const { setAuthStep } = authStepSlice.actions;
export default authStepSlice.reducer;
