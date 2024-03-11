import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProductPage from './pages/products';
import ErrorPage from './pages/404';

const BASE_PATH = '/frontend-skripsi';

const App = () => (
  <Router>
    <Routes>
      <Route path={`${BASE_PATH}/`} element={<LoginPage />} />
      <Route path={`${BASE_PATH}/login`} element={<LoginPage />} />
      <Route path={`${BASE_PATH}/register`} element={<RegisterPage />} />
      <Route path={`${BASE_PATH}/products`} element={<ProductPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
