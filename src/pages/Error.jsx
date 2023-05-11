import {useNavigate} from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    return(
        <>
            <p>Error</p>
            <button onClick={() => navigate("/")}>
                go to home page
            </button>
            <button onClick={() => navigate("/about")}>
                go to about page
            </button>
            <button onClick={() => navigate("/logement")}>
                go to logement page
            </button>
        </>
    )
}
export default Error;
