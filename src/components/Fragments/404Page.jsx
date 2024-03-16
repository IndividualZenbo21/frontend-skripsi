import {Link} from "react-router-dom";
import './styles/404Page.css';
import config from "../Config/default.json";

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <h1 className="title">404</h1>
            <p className="description">We're sorry, but the page you were looking for doesn't exist.</p>
            <Link to={`${config.baseUrl}/`} className="home-link">Back to Home</Link>
        </div>
    );
}

export default NotFoundPage;
