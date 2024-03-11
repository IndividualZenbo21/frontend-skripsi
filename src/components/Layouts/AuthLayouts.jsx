import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { auth } from '../service/AuthService';

Modal.setAppElement(document.getElementById('root')); 

function AuthLayouts({ children }) {
  const [authStatus, setAuthStatus] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    auth()
      .then(response => {
        if (response.status === 200) {
          setAuthStatus(true);
        } else {
          setAuthStatus(false);
          setModalIsOpen(true);
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
        setAuthStatus(false);
        setModalIsOpen(true);
      });
    }, []);

  if (authStatus === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Error Modal"
      >
        <h2>Error</h2>
        <p>Authentication failed</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
      {children}
    </div>
  );
}

export default AuthLayouts;
