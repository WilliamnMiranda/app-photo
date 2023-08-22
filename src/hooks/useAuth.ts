import { useQuery } from "react-query";
import userServices from "../services/UserService";
import { useEffect } from "react";
import { authenticate } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["auth"],
    queryFn: () => userServices.auth(),
    retry: false,
  });

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(authenticate(data));
    }
  }, []);

  return {
    data,
    isLoading,
    isSuccess,
  };
};
