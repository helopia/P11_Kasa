import { useRouteError } from "react-router-dom";
import "../assets/sass/pages/_error.scss";
const toto = true;

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="main error-page" id="error-page">
      <p className="error-page__404">404</p>
      <p className="error-page__text">
        Oups! La page que vous demandez n'existe pas
      </p>
      {toto ? (
        <a className="error-page__link " href="/">
          Retourner sur la page d'acceuil
        </a>
      ) : (
        <a className="error-page__link " href="/">
          Retourner sur la page home
        </a>
      )}
    </main>
  );
};
export default ErrorPage;

// rendu conditionnel ligne 16 25 !!!!! important !!!! important!!! faire le dropdown avec ça
// un state toggle open or close & accordeon if open show and ifnot don't show
