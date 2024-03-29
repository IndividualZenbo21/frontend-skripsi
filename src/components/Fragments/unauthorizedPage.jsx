import config from "../Config/default.json";
import './styles/unauthorizedPage.css';

const UnauthorizedPage = () => {
  return (
      <div className="unauthorized-page">
        <h1>Sorry, you are not authorized to access this page.</h1>
        <hr/>
        <div className="login-link">
          You need to login to access this page. <a href={`${config.baseUrl}/login`}>Go back to Login Page</a>
        </div>
      </div>
  );
}

export default UnauthorizedPage;
