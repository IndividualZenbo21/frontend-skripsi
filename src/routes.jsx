import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404.jsx'
import ProductPage from './pages/products.jsx'

const BASE_PATH = '/frontend-skripsi';

export const routes = [
  { path: `${BASE_PATH}/`, component: LoginPage, exact: true },
  { path: `${BASE_PATH}/login`, component: LoginPage },
  { path: `${BASE_PATH}/register`, component: RegisterPage },
  { path: `${BASE_PATH}/products`, component: ProductPage },
  { path: '*', component: ErrorPage },
];
