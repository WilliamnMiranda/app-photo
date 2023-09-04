import { useParams } from "react-router-dom";
import * as C from './style'
import ImageTeste from '../../assets/teste.jpg'

const StorageItem = (item: { image: string }) => {
  const LINK_SERVER = "http://localhost:8081/uploads/file-1693867846957-916952810.jpg"
  return <C.ImageItem src={LINK_SERVER}></C.ImageItem>;
};

const StorageScreen = () => {
  const { id } = useParams();
  const items = Array(6*4).fill({
    image: ImageTeste
  });

  return (
    <C.ContainerStorage>
      {items.map((item, index) => (
        <StorageItem key={index} image={item.image} />
      ))}
    </C.ContainerStorage>
  );
};

export default StorageScreen;
