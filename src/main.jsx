import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProductPage from './pages/products';
import ErrorPage from './pages/404';

const router = createBrowserRouter([
  { path: `/`, element: <LoginPage />},
  { path: `/login`, element: <LoginPage /> },
  { path: `/register`, element: <RegisterPage /> },
  { path: `/products`, element: <ProductPage /> },
  { path: '*', element: <ErrorPage/> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
