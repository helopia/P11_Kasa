import { RouterProvider } from "react-router-dom";
import { router } from "./router/rooter";
import Layout from "./component /layout/Layout";

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
