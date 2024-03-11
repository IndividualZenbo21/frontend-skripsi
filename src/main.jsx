import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, RouteObject} from "react-router-dom"
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404.jsx'
import ProductPage from './pages/products.jsx'

const route = [
  {
    path:"/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/login",
    element: <LoginPage/>,
  },
  {
    path:"/register",
    element: <RegisterPage/>
  },
  {
    path:"/products",
    element: <ProductPage/>
  }
]

const router = createBrowserRouter (route)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
