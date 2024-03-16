import {createBrowserRouter} from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProductPage from './pages/products';
import ErrorPage from './pages/404';
import config from './components/Config/default.json';
import HomePage from "./pages/home.jsx";

const router = createBrowserRouter([
    {path: `${config.baseUrl}/`, element: <HomePage/>},
    {path: `${config.baseUrl}/login`, element: <LoginPage/>},
    {path: `${config.baseUrl}/register`, element: <RegisterPage/>},
    {path: `${config.baseUrl}/products`, element: <ProductPage/>},
    {path: '*', element: <ErrorPage/>},
]);

export default router;
