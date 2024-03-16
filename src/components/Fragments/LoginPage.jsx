import * as React from "react"
import {login} from "../service/LoginService"
import config from '../Config/default.json'
import {useNavigate} from 'react-router-dom';
import './styles/LoginPage.css';

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
            <h2>Login</h2>
            <form>
                <label className="email-label" htmlFor="email">Email</label>
                <input className="email-input" type="email" placeholder="example@mail.com"
                       onChange={setHandleFormChange('email')}/>
                <label className="password-label" htmlFor="password">Password</label>
                <input className="password-input" type="password" placeholder="*****"
                       onChange={setHandleFormChange('password')}/>
                <button
                    className="login-button"
                    type="submit"
                    disabled={isDisabled}
                    onClick={executeLogin}>
                    Login
                </button>
            </form>
            <div className="register-link">
                Don't have an account? <a href="#">Register</a>
            </div>
        </div>

    )
}


export default LoginPage