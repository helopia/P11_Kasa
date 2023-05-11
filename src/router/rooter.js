import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Logement from "../pages/Logement";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element : <About />,
    },
    {
        path : "/error",
        element : <Error/>
    },
    {
        path : "/logement",
        element : <Logement/>
    }
]);
