import * as C from './style'
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlinePlus } from "react-icons/ai";
const HomeScreen = () => {
  return <C.ContainerHome>
    <C.ContainerOptions>
      <Link to="/pin">
        <C.Option>
          <div>
            <AiOutlinePlus />
          </div>
          Novo Storage </C.Option>
      </Link>
      <Link to="/pin">
        <C.Option>
          <div>
            <AiOutlineArrowRight />
          </div>
          Entrar no Storage
        </C.Option>
      </Link>
    </C.ContainerOptions>
  </C.ContainerHome>;
};

export default HomeScreen;
