import React from "react";
import { useLogin } from "../../hooks/useLogin";

const LoginScreen = () => {
  const { submit } = useLogin();
  return (
    <div>
      <form onSubmit={submit}>
        <input placeholder="email" />
        <input placeholder="email" />
        <button> login </button>
      </form>
    </div>
  );
};

export default LoginScreen;
