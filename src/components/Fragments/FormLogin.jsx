import InputForm from "../Elements/Input/Index"
import Button from "../Elements/Button"
import * as React from "react"
import { login } from "../service/LoginService"

const FormLogin = () => {
  const [formState, setFormState] = React.useState({
    email: '',
    password: ''
  });


  const executeLogin = async () => {
    const { email, password } = formState;
    const data = { 
      email: String(email), 
      password: String(password)
    };

    const response = await login(data);

    if (response && response.state === 'SUCCESS') {
      window.location.href = '/products';
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

    return (
        <form onSubmit={executeLogin}>
          <InputForm label="email" type="email" placeholder="example@mail.com" name="email" onChange={setHandleFormChange('email')}/>
          <InputForm label="password" type="password" placeholder="*****" name="password" onChange={setHandleFormChange('password')} />
          <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    )
}


export default FormLogin
