import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import Header from "../components/Header/index";

export const router = createBrowserRouter([
  {
    element: [<Header key={1} />],
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
