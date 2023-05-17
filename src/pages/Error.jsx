import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas</p>
      <a href="/">retourner sur la page d'acceuil</a>
    </div>
  );
};
export default ErrorPage;
