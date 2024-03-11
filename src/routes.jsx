import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404.jsx'
import ProductPage from './pages/products.jsx'

export const routes = [
    { path: '/', component: () => <div>Hello World</div>, exact: true },
    { path: '/login', component: LoginPage, exact: true },
    { path: '/register', component: RegisterPage, exact: true },
    { path: '/products', component: ProductPage, exact: true },
    { path: '*', component: ErrorPage },
  ];
