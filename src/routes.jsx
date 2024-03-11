import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404.jsx'
import ProductPage from './pages/products.jsx'

export const routes = [
    { path: '/', component: () => <div>Hello World</div>, exact: true },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/products', component: ProductPage },
    { path: '*', component: ErrorPage },
  ];
