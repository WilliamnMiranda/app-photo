import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/Home";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
]);

export default router;
