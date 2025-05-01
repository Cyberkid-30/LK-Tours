import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BusinessCard from "./components/business-card";
import Flyers from "./components/flyers";

const router = createBrowserRouter([
  {
    index: true,
    element: <BusinessCard />,
  },
  {
    path: "/flyers",
    element: <Flyers />,
  },
]);

export default router;
