import {auth} from '../service/authService.jsx';
import {useEffect, useState} from 'react';
import NotFoundPage from "../../pages/notFoud.jsx";

function AuthLayouts({children}) {
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    auth()
        .then(response => {
          if (response.status === 'OK') {
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
