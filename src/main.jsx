import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProductPage from './pages/products';
import ErrorPage from './pages/404';

const BASE_PATH = '/frontend-skripsi';

const router = createBrowserRouter([
  { path: `${BASE_PATH}/`, 
    element: <div>Hello World!</div> 
  },
  { path: `${BASE_PATH}/login`, element: <LoginPage /> },
  { path: `${BASE_PATH}/register`, element: <RegisterPage /> },
  { path: `${BASE_PATH}/products`, element: <ProductPage /> },
  { path: '*', element: <ErrorPage/> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
