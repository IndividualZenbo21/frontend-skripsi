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

    if (response && response.status === 'OK') {
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
      <>
      <div className="mb-6">
            <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" label="email" type="email" placeholder="example@mail.com" name="email" id="email" onChange={setHandleFormChange('email')}/>
          </div>
          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" label="password" type="password" placeholder="*****" name="password" id="password" onChange={setHandleFormChange('email')}/>
          </div>
          <button
            className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white"
            type="submit"
            onSubmit={executeLogin}>
              Login
          </button>
      </>
          
    )
}


export default FormLogin
