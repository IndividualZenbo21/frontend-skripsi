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
                    navigate('');
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                setAuthStatus(false);
                navigate('');
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
