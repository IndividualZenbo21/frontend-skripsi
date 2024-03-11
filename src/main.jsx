import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProductPage from './pages/products';
import ErrorPage from './pages/404';
import config from './components/config/default.json';

const router = createBrowserRouter([
  { path: `${config.baseUrl}/`, element: <LoginPage />},
  { path: `${config.baseUrl}/login`, element: <LoginPage /> },
  { path: `${config.baseUrl}/register`, element: <RegisterPage /> },
  { path: `${config.baseUrl}/products`, element: <ProductPage /> },
  { path: '*', element: <ErrorPage/> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
