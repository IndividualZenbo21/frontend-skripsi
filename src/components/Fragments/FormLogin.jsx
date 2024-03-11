import * as React from "react"
import { login } from "../service/LoginService"
import config from '../config/default.json'
import Cookies from "js-cookie";
import axios from "axios";

const FormLogin = () => {
  const [formState, setFormState] = React.useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = React.useState(false);


  const executeLogin = async () => {
    const { email, password } = formState;
    const data = { 
      email: String(email), 
      password: String(password)
    };

    setLoading(true);

    const response = await login(data);

    if (response && response.status === 'OK') {
      axios.get("https://www.epskr24.my.id/api/auth/test", {
        withCredentials: true
      })
      console.log(Cookies.get())
      //window.location.href = `${config.baseUrl}/products`;
    } else {
      console.error('Login Failed');
    }
    setLoading(false);
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

  const auth = () => {
    axios.get("https://www.epskr24.my.id/api/auth/test")
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  } 

    return (
      <>
      <div className="mb-6">
            <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" label="email" type="email" placeholder="example@mail.com" onChange={setHandleFormChange('email')} value={formState.email} disabled={loading}/>
          </div>
          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" label="password" type="password" placeholder="*****" onChange={setHandleFormChange('password')} value={formState.password} disabled={loading}/>
          </div>
          <button
            className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white"
            type="submit"
            disabled={isDisabled}
            onClick={executeLogin}>
              Login
          </button>
          <button onClick={auth}
          className="h-10 px-6 font-semibold rounded-md bg-blue-600 w-full text-white mt-2"
          >TEST API</button>
      </>
          
    )
}


export default FormLogin
