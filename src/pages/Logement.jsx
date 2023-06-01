import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import ArrowRight from "../assets/images/ArrowRight.svg";
import ArrowLeft from "../assets/images/ArrowLeft.svg";
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
    <div>
      <>
        {/*<p>{dataLogement?.pictures[0]}</p>*/}
        <img
          src={dataLogement?.pictures[pictureLogement]}
          alt="photo du logement"
        />
        ;
        <button onClick={onClickPreviousSlide}>
          <img
            className="carrousel__arrow-right"
            src={ArrowRight}
            alt="show next slide"
          />
        </button>
        <button onClick={onClickNextSlide}>
          <img
            className="carrousel__arrow-left"
            src={ArrowLeft}
            alt="show previous slide"
          />
        </button>
      </>
      <div>
        <div>
          <p>{dataLogement?.title}</p>
          <p>{dataLogement?.location}</p>
          <ul>
            {dataLogement?.tags?.map((tag, key) => {
              return <li key={key}>{tag}</li>;
            })}
          </ul>
        </div>
        <div>
          <div>
            <div>{dataLogement?.host?.name}</div>
            <div>image</div>
          </div>
          <div>
            <p>étoiles</p>
          </div>
        </div>
      </div>
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
    </div>
  );
};
export default Logement;
