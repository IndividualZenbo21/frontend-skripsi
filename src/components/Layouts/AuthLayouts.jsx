import { auth } from '../service/AuthService';
import { useEffect, useState } from 'react';
import NotFoundPage from "../../pages/404.jsx";

function AuthLayouts({ children }) {
    const [authStatus, setAuthStatus] = useState(false);

    useEffect(() => {
        auth()
            .then(response => {
                if (response.status === 200) {
                    setAuthStatus(true);
                } else {
                    setAuthStatus(false);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                setAuthStatus(false);
            });
    }, []);

    if (authStatus === false) {
        return <NotFoundPage/>;
    }

    return (
        <div>
            {children}
        </div>
    );
}

export default AuthLayouts;
