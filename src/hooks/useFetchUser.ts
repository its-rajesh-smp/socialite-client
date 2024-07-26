import { useQuery } from "@apollo/client";
import { FETCH_USER_QUERY } from "../graphql/auth.graphql";
import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { authenticateUser } from "../store/auth/authSlice";

function useFetchUser() {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useQuery(FETCH_USER_QUERY);

  useEffect(() => {
    if (data?.fetchUser) {
      dispatch(authenticateUser(data?.fetchUser));
    }
  }, [data]);

  return { loading, error };
}

export default useFetchUser;
