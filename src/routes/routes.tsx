import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/Home";
import StorageScreen from "../pages/Storage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/storage/:id",
    element: <StorageScreen />,
  },
]);

export default router;
