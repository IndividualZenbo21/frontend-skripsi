import { Link } from "react-router-dom"
import FormLogin from "../Fragments/FormLogin"

const BASE_PATH = '/frontend-skripsi';
const AuthLayout = (props) => {
    const {children, title, type} = props
    return (
    <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow p-5">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
            <p className="font-medium text-slate-500 mb-8">
                Welcome, Please enter your details
            </p>
            {children}
            <Navigation type={type}/>
        </div>
    </div>
    )
}

const Navigation = ({type}) => {
    if (type === 'login'){
        return (
            <p className="text-sm mt-5 text-center">
                Don't have an account? {" "}
                <Link to={`${BASE_PATH}/register`} className="font-bold text-blue-600">Sign Up</Link>
            </p>
        )
    }else{
        return (
            <p className="text-sm mt-5 text-center">
                Already have an account? {" "}
                <Link to={`${BASE_PATH}/login`} className="font-bold text-blue-600">Login</Link>
            </p>
        )
    }
}

export default AuthLayout
