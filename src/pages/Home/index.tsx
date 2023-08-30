import * as C from './style'
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return <C.ContainerHome>
    <C.ContainerOptions>
        <Link to="/pin">
          <C.Option> Novo Storage </C.Option>
        </Link>
        <C.Option> Entrar no Storage </C.Option>
    </C.ContainerOptions>
  </C.ContainerHome>;
};

export default HomeScreen;
