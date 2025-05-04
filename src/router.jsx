import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BusinessCard from "./components/business-card";
import Flyers from "./components/flyers";
import Logo from "./components/logo";

const router = createBrowserRouter([
  {
    index: true,
    element: <Logo />,
  },
  {
    path: "/flyers",
    element: <Flyers />,
  },
]);

export default router;
