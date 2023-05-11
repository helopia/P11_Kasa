import {useNavigate} from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return(
        <div>
            <p>About</p>
            <button onClick={() => navigate("/")}>
                go to home page
            </button>
            <button onClick={() => navigate("/error")}>
                go to error page
            </button>
            <button onClick={() => navigate("/logement")}>
                go to logement page
            </button>
        </div>
    )
}

export default About;
