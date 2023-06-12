import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import ArrowRight from "../assets/images/ArrowRight.svg";
import ArrowLeft from "../assets/images/ArrowLeft.svg";
import "../assets/sass/pages/_logement.scss";
import Dropdown from "../component/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Logement = () => {
  const { dataLogements } = useLoaderData();
  const { IdLogement } = useParams();
  const [pictureLogement, setPictureLogement] = useState(0);
  console.log("pictureLogement", pictureLogement);
  const dataLogementIndex = dataLogements?.findIndex(
    (logement) => logement.id === IdLogement
  );

  const dataLogement = dataLogements[dataLogementIndex];
  //create 2 functions for carousel navigation
  const onClickNextSlide = () => {
    if (pictureLogement === dataLogement?.pictures?.length - 1)
      setPictureLogement(0);
    else setPictureLogement((prev) => prev + 1);
  };

  const onClickPreviousSlide = () => {
    setPictureLogement(pictureLogement - 1);
    if (pictureLogement === 0) setPictureLogement(0);
  };

  const maxRating = 5; // nombre d'étoiles maximum
  const rating = dataLogement?.rating; // stocke le rating récupéré depuis le JSON
  const stars = Math.round(rating); // arrondit le rating au nombre entier le plus proche
  const coloredStars = (
    <>
      {Array.from({ length: stars }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} color="$primary-color" />
      ))}
    </>
  );

  const emptyStars = (
    <>
      {Array.from({ length: maxRating - stars }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} color="#E3E3E3" />
      ))}
    </>
  );
  const allStars = (
    <>
      {coloredStars}
      {emptyStars}
    </>
  );
  return (
    <main className="location">
      <section className="location__carousel">
        <img
          className="location__carousel__img"
          src={dataLogement?.pictures[pictureLogement]}
          alt="photo du logement"
        />

        <div className="location__carousel__nav">
          <img
            onClick={onClickPreviousSlide}
            className="location__carousel__nav__arrow-right"
            src={ArrowRight}
            alt="show next slide"
            role="button"
          />

          <img
            onClick={onClickNextSlide}
            className="location__carousel__nav__arrow-left"
            src={ArrowLeft}
            alt="show previous slide"
            role="button"
          />
        </div>
      </section>
      <section className="location__infos">
        <div className="location__infos__leftside">
          <div>
            <h2>{dataLogement?.title}</h2>
            <p>{dataLogement?.location}</p>
          </div>
          <div className="location__infos__leftside__tags">
            {dataLogement?.tags?.map((tag, key) => {
              return <span key={key}>{tag}</span>;
            })}
          </div>
        </div>
        <div className="location__infos__rightside">
          <div>
            <p>{dataLogement?.host?.name}</p>
            <img
              src={dataLogement?.host?.picture}
              alt={dataLogement?.host?.picture}
            />
          </div>
          <div className="location__infos__stars">{allStars}</div>
        </div>
      </section>
      <div className="location__infos__dropdown">
        <Dropdown title="Description" content={dataLogement?.description} />
        <Dropdown title="Équipements" content={dataLogement?.equipments} />
      </div>
    </main>
  );
};
export default Logement;
