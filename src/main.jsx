import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import cartProductLoader from './cartProductLoader';
import Chackout from './components/Chackout/Chackout';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivetRouts from './routes/PrivetRouts';
import Invantory from './components/Invantory/Invantory';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/chackout',
        element: <PrivetRouts><Chackout></Chackout></PrivetRouts>
      },
      {
        path: '/order',
        element: <Order></Order>,
        loader: cartProductLoader
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/invantory',
        element: <PrivetRouts><Invantory></Invantory></PrivetRouts>
      },
      {
        path: '*',
        element: <div>Error Page</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
