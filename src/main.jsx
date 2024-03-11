import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
