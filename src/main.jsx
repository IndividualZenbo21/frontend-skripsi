import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProductPage from './pages/products';
import ErrorPage from './pages/404';

export const pathConfig = {
  '/': LoginPage,
  '/login': LoginPage,
  '/regitster': RegisterPage,
  '/products': ProductPage,
};

const rootElement = document.getElementById('root');

  if (rootElement) {
    const path = window.location.pathname;
    const ComponentToRender = pathConfig[path] || ErrorPage;

    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <ComponentToRender />
      </React.StrictMode>
    );
  }

