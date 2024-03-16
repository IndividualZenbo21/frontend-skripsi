import {useNavigate} from "react-router-dom";
import config from "../Config/default.json";
import '../components/Fragments/styles/HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate(`${config.baseUrl}/login`);
    };

    return (
        <div className="home">
            <h1>Welcome to User Level Access Manager</h1>
            <p>Manage access levels efficiently and effectively.</p>
            <button className="login-button" onClick={handleLoginClick}>Login</button>
        </div>
    );

}

export default HomePage;
