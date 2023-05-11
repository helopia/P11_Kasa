import {useNavigate} from "react-router-dom";

const Logement = () => {
    const navigate = useNavigate();

    return(
        <>
            <p>Logement</p>
            <button onClick={() => navigate("/")}>
                go to home page
            </button>
            <button onClick={() => navigate("/about")}>
                go to about page
            </button>
            <button onClick={() => navigate("/error")}>
                go to error page
            </button>

        </>
    )
}
export default Logement;
