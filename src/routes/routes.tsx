import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/Home";
import StorageScreen from "../pages/Storage";
import PrivateRoute from "../components/private_route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/storage/:id",
    element: <PrivateRoute element={StorageScreen} />,
  },
  {
    path: "/login",
    element: <HomeScreen />,
  },
]);

export default router;
