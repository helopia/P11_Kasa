import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ logement }) => {
  const navigate = useNavigate();

  return (
    <div>
      <p onClick={() => navigate(`/logement/${logement?.id}`)}>
        {logement.title}
      </p>
      {/*<img src={logement.picture} alt="aperçu du logement" />*/}
    </div>
  );
};
export default Card;
