import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import ArrowRight from "../assets/images/ArrowRight.svg";
import ArrowLeft from "../assets/images/ArrowLeft.svg";
import "../assets/sass/pages/_logement.scss";
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
  const onClickNextSlide =
    // () =>
    // Utilisation de l'opérateur ternaire , version if... else au dessous
    // setPictureLogement((prev) =>
    //   prev === dataLogements?.pictures?.length - 1
    //     ? setPictureLogement(0)
    //     : prev + 1
    // );
    () => {
      if (pictureLogement === dataLogement?.pictures?.length - 1)
        setPictureLogement(0);
      else setPictureLogement((prev) => prev + 1);
    };

  const onClickPreviousSlide = () => {
    setPictureLogement(pictureLogement - 1);
    if (pictureLogement === 0) setPictureLogement(0);
  };

  //   setPictureLogement((prev) =>
  //     prev === setPictureLogement(pictureLogement - 1)
  //       ? setPictureLogement(0)
  //       : prev - 1
  //   );
  // };

  return (
    <main className="location">
      {/*<p>{dataLogement?.pictures[0]}</p>*/}
      <section className="location__carousel">
        <img
          className="location__carousel__img"
          src={dataLogement?.pictures[pictureLogement]}
          alt="photo du logement"
        />

        <div className="location__carousel__nav">
          <button onClick={onClickPreviousSlide}>
            <img
              className="location__carousel__nav__arrow-right"
              src={ArrowRight}
              alt="show next slide"
            />
          </button>
          <button onClick={onClickNextSlide}>
            <img
              className="location__carousel__nav__arrow-left"
              src={ArrowLeft}
              alt="show previous slide"
            />
          </button>
        </div>
      </section>
      <section>
        <section className="location__infos">
          <h1>{dataLogement?.title}</h1>
          <h3>{dataLogement?.location}</h3>
        </section>
        <section className="location__dropdown">
          <ul>
            {dataLogement?.tags?.map((tag, key) => {
              return <li key={key}>{tag}</li>;
            })}
          </ul>
        </section>

        <div>
          <div>
            <div>{dataLogement?.host?.name}</div>
            <div>image</div>
          </div>
          <div>
            <p>étoiles</p>
          </div>
        </div>
      </section>
      <div>
        <div>
          <p>description</p>
          <p>{dataLogement?.description}</p>
        </div>
        <div>
          <p>equipments</p>
          <ul>
            {dataLogement?.equipments?.map((equipment, key) => {
              return <li key={key}>{equipment}</li>;
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};
export default Logement;
