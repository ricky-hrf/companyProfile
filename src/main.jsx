import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import HomePage from './assets/components/pages/homePage';
import TentangKami from './assets/components/pages/TentangKami';
import BisnisKami from './assets/components/pages/BisnisPage';
import ErrorPage from './assets/components/pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const rute = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement:<ErrorPage />
  },
  {
    path: "/tentang-kami",
    element: <TentangKami />,
  },
  {
    path: "/bisnis-kami",
    element: <BisnisKami />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rute} />
  </React.StrictMode>,
)
