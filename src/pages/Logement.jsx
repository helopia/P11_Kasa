import { useLoaderData, useParams } from "react-router-dom";

const Logement = () => {
  const { dataLogements } = useLoaderData();
  const { IdLogement } = useParams();

  const dataLogementIndex = dataLogements?.findIndex(
    (logement) => logement.id === IdLogement
  );

  const dataLogement = dataLogements[dataLogementIndex];

  return (
    <div>
      <div>
        <p>image</p>
      </div>
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
