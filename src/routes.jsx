import {createBrowserRouter} from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import NotFound from './pages/notFoud';
import config from './components/Config/default.json';
import Home from "./pages/home.jsx";
import ManageUser from "./pages/manageUsers.jsx";

const router = createBrowserRouter([
  {path: `${config.baseUrl}/`, element: <Home/>},
  {path: `${config.baseUrl}/login`, element: <Login/>},
  {path: `${config.baseUrl}/register`, element: <Register/>},
  {path: `${config.baseUrl}/manage-users`, element: <ManageUser/>},
  {path: '*', element: <NotFound/>},
]);

export default router;
