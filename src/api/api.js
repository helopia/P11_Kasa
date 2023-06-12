import dataLogements from "../assets/data/logements.json";
import { redirect } from "react-router-dom";

export async function logementsloader({ params }) {
  if (params?.IdLogement) {
    const dataLogementIndex = dataLogements?.findIndex(
      (logement) => logement.id === params.IdLogement
    );

    if (dataLogementIndex === -1) {
      return redirect("/404");
    }
  }

  return { dataLogements };
}
