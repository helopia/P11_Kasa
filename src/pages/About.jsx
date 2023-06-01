import { useNavigate } from "react-router-dom";
import Banner from "../component/Banner";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>About</p>
      <main className="main">
        <Banner bannerClass="banner__about" title="" />
      </main>
      {/*<button onClick={() => navigate("/")}>go to home page</button>*/}
      <button onClick={() => navigate("/logement")}>go to logement page</button>
    </div>
  );
};

export default About;
