import {useNavigate} from "react-router-dom";
import config from "../Config/default.json";
import './styles/HomePage.css';
import { Fragment } from "react";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(`${config.baseUrl}/login`);
  };

  return (
    <Fragment>
      <Navbar/>
      <div className="home">
        <h1>Welcome to User Level Access Manager</h1>
        <p>Manage access levels efficiently and effectively.</p>
        <button className="home-login-button" onClick={handleLoginClick}>Login</button>
      </div>
    </Fragment>
  );

}

export default HomePage;
