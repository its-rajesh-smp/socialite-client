import { useQuery } from "@apollo/client";
import { FETCH_USER_QUERY } from "../graphql/auth.graphql";
import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { authenticateUser, setUserLoading } from "../store/auth/authSlice";

/**
 * Hook to fetch user data
 * @returns {loading: boolean, error: any}
 */
function useFetchUser() {
  const dispatch = useAppDispatch();

  const { loading, error, data } = useQuery(FETCH_USER_QUERY, {
    skip: !localStorage.getItem("accessToken"),
  });

  useEffect(() => {
    // if user is authenticated then dispatch authenticateUser action
    if (data?.fetchUser) {
      dispatch(authenticateUser({ ...data?.fetchUser, loadingUser: false }));
    } else if (!loading) {
      // if user is not authenticated and we are not making the API request then then dispatch setUserLoading action
      dispatch(setUserLoading(false));
    }
  }, [data]);

  return { loading, error };
}

export default useFetchUser;
