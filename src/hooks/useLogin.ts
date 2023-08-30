import { useEffect, useState } from "react";
import userServices from "../services/UserService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/UserSlice";

import { useMutation, useQuery } from "react-query";
import { IUserDataLogin } from "../interfaces/UserInterface";
export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["auth"],
    queryFn: () => userServices.auth(),
    retry: false,
  });

  const mutation = useMutation(
    (data: IUserDataLogin) => userServices.login(data),
    {
      onSuccess: (data) => {
        dispatch(login(data));
        navigate("/");
      },
      onError: () => {
        alert("error");
      },
    }
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { email, password };
    mutation.mutate(data);
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);
  return {
    setEmail,
    setPassword,
    submit,
    data,
    isLoading,
    isSuccess,
    email,
    password,
  };
};
