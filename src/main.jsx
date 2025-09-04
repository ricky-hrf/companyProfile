import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import HomePage from './assets/components/pages/homePage';
import TentangKami from './assets/components/pages/TentangKami';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const rute = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tentang-kami",
    element: <TentangKami />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rute} />
  </React.StrictMode>,
)
