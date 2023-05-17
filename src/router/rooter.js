import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/Error";
import Logement from "../pages/Logement";
import Layout from "../component/layout/Layout";
import { logementsloader } from "../api/api";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: logementsloader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "logement/:IdLogement",
        element: <Logement />,
        loader: logementsloader,
      },
    ],
  },
]);
