import { useLoaderData } from "react-router-dom";
import Card from "../component/Card";

const Home = () => {
  const { dataLogements } = useLoaderData();

  return (
    <>
      <p>HOME</p>
      {dataLogements?.map((logement, key) => (
        <Card key={key} logement={logement} />
      ))}
    </>
  );
};
export default Home;
