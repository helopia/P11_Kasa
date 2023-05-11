import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return(
        <>
            <p>HOME</p>
            <button onClick={() => navigate("/about")}>
                go to about page
            </button>
            <button onClick={() => navigate("/error")}>
                go to error page
            </button>
            <button onClick={() => navigate("/logement")}>
                go to logement page
            </button>
        </>
    )
}
export default Home;
