import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import HomePage from './pages/homePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const rute = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rute} />
  </React.StrictMode>,
)
