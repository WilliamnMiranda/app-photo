import React from "react";
import { useLogin } from "../../hooks/useLogin";
import InputText from "../../components/forms/input_text";

const LoginScreen = () => {
  const { submit, setEmail, setPassword, email, password } = useLogin();
  console.log(email);
  console.log(password);
  return (
    <div>
      <form onSubmit={submit}>
        <InputText onChange={setEmail} value={email} />
        <InputText onChange={setPassword} value={password} />
        <button> login </button>
      </form>
    </div>
  );
};

export default LoginScreen;
