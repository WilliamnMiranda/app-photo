import { useLogin } from "../../hooks/useLogin";
import InputText from "../../components/forms/input_text";
import * as C from "./style";
import Label from "../../components/forms/label";
const LoginScreen = () => {
  const { submit, setEmail, setPassword, email, password } = useLogin();
  return (
    <C.ContainerLogin>
      <C.ContainerForm>
        <C.Tittle> Login </C.Tittle>
        <form onSubmit={submit}>
          <div>
            <Label value="Informe seu login" />
            <InputText onChange={setEmail} value={email} />
          </div>
          <div>
            <Label value="Informe sua senha" />
            <InputText onChange={setPassword} value={password} />
          </div>
          <C.ButtonLogin> login </C.ButtonLogin>
        </form>
      </C.ContainerForm>
    </C.ContainerLogin>
  );
};

export default LoginScreen;
