import { auth } from '../service/AuthService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../Config/default.json'

function AuthLayouts({ children }) {
    const [authStatus, setAuthStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        auth()
            .then(response => {
                if (response.status === 200) {
                    setAuthStatus(true);
                } else {
                    setAuthStatus(false);
                    if (window.confirm("Authentication failed. Press OK to return to the home page.")) {
                        navigate(`${config.baseUrl}/`);
                    }
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                setAuthStatus(false);
                if (window.confirm("Authentication failed. Press OK to return to the home page.")) {
                    navigate(`${config.baseUrl}/`);
                }
            });
    }, []);

    if (authStatus === false) {
        return <div></div>;
    }

    return (
        <div>
            {children}
        </div>
    );
}

export default AuthLayouts;
