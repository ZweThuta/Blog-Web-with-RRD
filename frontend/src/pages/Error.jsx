import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };
  return (
    <section className="error-page">
      <div className="error-container">
        <ExclamationTriangleIcon className="error-icon" />
        <h1>500 Error</h1>
        <div className="error-text">
          <p>
            Sorry, something went wrong on our end. We are currently trying to
            fix the problem.
          </p>
          <button className="edit-btn" onClick={navigateHandler}>
            Go back Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error;
