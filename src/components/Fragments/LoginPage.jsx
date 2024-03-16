import * as React from "react"
import { login } from "../service/LoginService"
import config from '../Config/default.json'
import { useNavigate } from 'react-router-dom';
import './styles/LoginPage.css';

const LoginPage = () => {
  const [formState, setFormState] = React.useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const executeLogin = async () => {
    const { email, password } = formState;
    const data = { 
      email: String(email), 
      password: String(password)
    };
    const response = await login(data);

    if (response && response.status === 'OK') {
      navigate(`${config.baseUrl}/products`);
    } else {
      console.error('Login Failed');
    }
  }

  const setHandleFormChange = (type) => (event) => {
    const newFormState = { 
      ...formState, 
      [type]: event.target.value,
    };
    setFormState(newFormState);
  };
  
  const isDisabled = React.useMemo(() => {
    return formState.email === '' || formState.password === '';
  }, [formState]);

    return (
        <div className="login-form">
          <div className="mb-6">
            <label className="email-label" htmlFor="email">Email</label>
            <input className="email-input" label="email" type="email" placeholder="example@mail.com"
                   onChange={setHandleFormChange('email')}/>
          </div>
          <div className="mb-6">
            <label className="password-label" htmlFor="password">Password</label>
            <input className="password-input" label="password" type="password" placeholder="*****"
                   onChange={setHandleFormChange('password')}/>
          </div>
          <button
              className="login-button"
              type="submit"
              disabled={isDisabled}
              onClick={executeLogin}>
            Login
          </button>
        </div>

    )
}


export default LoginPage
