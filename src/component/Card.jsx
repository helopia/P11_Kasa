import React from "react";
// import { useNavigate } from "react-router-dom";
import "../../src/assets/sass/components/_card.scss";
import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  // const navigate = useNavigate();

  return (
    <article className="logement-card">
      <Link to={"/logement/" + logement?.id}>
        <div className="logement-card__overlay"></div>
        <img
          className="logement-card__img"
          src={logement?.cover}
          alt="logement"
        />
        <h2 className="logement-card__title">{logement?.title}</h2>
      </Link>
    </article>
  );
};
export default Card;
