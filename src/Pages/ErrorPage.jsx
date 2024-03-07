import Wrapper from "../assets/wrappers/Error";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh!</h3>
          <p>We can't find the page you are looking for.</p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong.</h3>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
