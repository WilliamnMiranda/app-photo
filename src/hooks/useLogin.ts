import { useEffect, useState } from "react";
import userServices from "../services/UserService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/UserSlice";

import { useMutation, useQuery } from "react-query";
import { IUserDataLogin } from "../interfaces/UserInterface";
export const useLogin = () => {
  const [email, setEmail] = useState("williamnmiranda@gmail.com");
  const [password, setPassword] = useState("123");
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
    }
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { email, password };
    console.log(data);
    mutation.mutate(data);
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, isLoading, navigate]);
  return {
    setEmail,
    setPassword,
    submit,
    data,
    isLoading,
    isSuccess,
  };
};
