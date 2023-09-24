import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  //   console.log(error);
  return (
    <div className="mt-56 space-y-4 text-center">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred. 😢</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="btn bg-[#FF444A] text-white capitalize hover:text-black mt-10">
          Go Back to HomePage
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
