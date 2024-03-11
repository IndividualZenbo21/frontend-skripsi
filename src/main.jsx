import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

const BASE_PATH = '/frontend-skripsi';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename={BASE_PATH}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact} element={<route.component />} /> 
        ))}
      </Routes>
    </Router>
  </React.StrictMode>
);
