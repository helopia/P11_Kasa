import { RouterProvider } from "react-router-dom";
import { router } from "./router/rooter";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
