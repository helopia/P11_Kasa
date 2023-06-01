import { useLoaderData } from "react-router-dom";
import Card from "../component/Card";
import Banner from "../component/Banner";

const Home = () => {
  const { dataLogements } = useLoaderData();

  return (
    <>
      <main className="main page-acceuil">
        <Banner
          bannerClass="banner__home"
          title="Chez vous, partout et ailleurs"
        />
        <section className="logement">
          {dataLogements?.map((logement, key) => (
            <Card key={key} logement={logement} />
          ))}
        </section>
      </main>
    </>
  );
};
export default Home;
