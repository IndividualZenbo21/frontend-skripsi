import './styles/LoginPage.css';
import {login} from "../service/LoginService.jsx";
import config from "../Config/default.json";
import * as React from "react";
import {useNavigate} from "react-router-dom";
const RegisterPage = () => {
    const [formState, setFormState] = React.useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const executeRegister = async () => {


        const {email, password} = formState;
        const data = {
            email: String(email),
            password: String(password)
        };
        const response = await login(data);

        if (response && response.status === 'OK') {
            navigate(`${config.baseUrl}/login`);
        } else {
            console.error('Register Failed');
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
            <h1>Register</h1>
            <form onSubmit={event => {
                event.preventDefault();
                executeRegister();
            }}>
                <div>
                    <label className="name-label" htmlFor="fullname">Fullname</label>
                    <input className="name-input" type="text" placeholder="insert your name here..." name="fullname"/>
                </div>
                <div>
                    <label className="email-label" htmlFor="email">Email</label>
                    <input className="email-input" type="email" placeholder="example@mail.com" name="email"/>
                </div>
                <div>
                    <label className="password-label" htmlFor="password">Password</label>
                    <input className="password-input" type="password" placeholder="*****" name="password"/>
                </div>
                <div>
                    <label className="password-label" htmlFor="confirmPassword">Confirm Password</label>
                    <input className="password-input" type="password" placeholder="*****" name="confirPassword"/>
                </div>
                <button
                    className="register-button">
                    Register
                </button>
            </form>

        </div>
    )
}

export default RegisterPage;