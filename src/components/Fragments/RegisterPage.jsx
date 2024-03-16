import './styles/LoginPage.css';
import {login} from "../service/LoginService.jsx";
import config from "../Config/default.json";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import './styles/RegisterPage.css'
const RegisterPage = () => {
    const [formState, setFormState] = React.useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
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

    const setHandleFormChange = (event) => {
        const newFormState = {
            ...formState,
            [event.target.name]: event.target.value,
        };
        setFormState(newFormState);
    };

    const doPasswordsMatch = React.useCallback(() => {
        const { password, confirmPassword } = formState;
        return password === confirmPassword;
    }, [formState]);

    const isDisabled = React.useMemo(() => {
        return formState.fullName === '' || formState.email === '' || formState.password === '' || formState.confirmPassword === '' || !doPasswordsMatch();
    }, [formState, doPasswordsMatch]);

    return (
        <div className="register-form">
            <h1>Register</h1>
            <form onSubmit={event => {
                event.preventDefault();
                executeRegister();
            }}>
                <div>
                    <label className="name-label" htmlFor="fullname">Fullname</label>
                    <input className="name-input" type="text" onChange={setHandleFormChange} placeholder="insert your name here..." name="fullname"/>
                </div>
                <div>
                    <label className="email-label" htmlFor="email">Email</label>
                    <input className="email-input" type="email" onChange={setHandleFormChange} placeholder="example@mail.com" name="email"/>
                </div>
                <div>
                    <label className="password-label" htmlFor="password">Password</label>
                    <input className="password-input" type="password" onChange={setHandleFormChange} placeholder="*****" name="password"/>
                </div>
                <div>
                    <label className="password-label" htmlFor="confirmPassword">Confirm Password</label>
                    <input className="password-input" type="password" onChange={setHandleFormChange} placeholder="*****" name="confirmPassword"/>
                </div>
                <div>
                    { !doPasswordsMatch() && <p>Passwords do not match</p> }
                </div>
                <button
                    className="register-button"
                    type="submit"
                    disabled={isDisabled}>
                    Register
                </button>
            </form>
            <div className="login-link">
                Already have an account? <a href={`${config.baseUrl}/login`}>Login</a>
            </div>
        </div>
    )
}

export default RegisterPage;
