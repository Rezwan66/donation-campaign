import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  //   console.log(error);
  return (
    <div className="mt-52 space-y-4 text-center">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred. 😢</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
