import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProductPage from './pages/products';
import ErrorPage from './pages/404';

const BASE_PATH = '/frontend-skripsi';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename={BASE_PATH}>
      <Routes>
        <Route path={`${BASE_PATH}/`} element={<LoginPage/>} />
        <Route path={`${BASE_PATH}/login`} element={<LoginPage/>} />
        <Route path={`${BASE_PATH}/register`} element={<RegisterPage/>} />
        <Route path={`${BASE_PATH}/product`} element={<ProductPage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);