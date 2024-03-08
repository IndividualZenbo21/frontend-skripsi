import * as React from "react"
import {login} from "../service/loginService.jsx"
import config from '../Config/default.json'
import {Link, useNavigate} from 'react-router-dom';
import './styles/loginPage.css';

const LoginPage = () => {
  const [formState, setFormState] = React.useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const executeLogin = async () => {
    const {email, password} = formState;
    const data = {
      email: String(email),
      password: String(password)
    };
    const response = await login(data);

    if (response && response.status === 'OK') {
      navigate(`${config.baseUrl}/manage-users`);
    } else {
      console.error('Login Failed');
    }
  }

  const setHandleFormChange = (event) => {
    const newFormState = {
      ...formState,
      [event.target.name]: event.target.value,
    };
    setFormState(newFormState);
  };

  const isDisabled = React.useMemo(() => {
    return formState.email === '' || formState.password === '';
  }, [formState]);

  return (
      <div className="login-page">
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={(event) => {
            event.preventDefault();
            executeLogin();
          }}>
            <label className="email-label" htmlFor="email">Email</label>
            <input className="email-input" type="email" placeholder="example@mail.com"
                   onChange={setHandleFormChange} autoComplete="on" name="email"/>
            <label className="password-label" htmlFor="password">Password</label>
            <input className="password-input" type="password" placeholder="*****"
                   onChange={setHandleFormChange} name="password"/>
            <button
                className="login-button"
                type="submit"
                disabled={isDisabled}>
              Login
            </button>
          </form>
          <div className="register-link">
            Don't have an account? <Link to={`${config.baseUrl}/register`}>Register</Link>
          </div>
        </div>
      </div>

  )
}


export default LoginPage
