import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/Home";
import StorageScreen from "../pages/Storage";
import PrivateRoute from "../components/private_route";
import PinScreen from "../pages/Pin";
import LoginScreen from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/pin",
    element: <PinScreen />,
  },
  {
    path: "/storage/:id",
    element: <PrivateRoute element={StorageScreen} />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
]);

export default router;
