import { AppDispatch, RootState } from "../../store";
import { logout } from "../slices/authSlice";

/**
 * Function to logout the user
 * @returns void
 */
export const logoutUser = () => {
  return async (dispatch: AppDispatch, _: () => RootState) => {
    dispatch(logout());
  };
};
