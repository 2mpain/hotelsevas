import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutUs",
    element: <div>aboutUs</div>
  },
  {
    path: "/rooms",
    element: <div>rooms</div>
  },
  {
    path: "/location",
    element: <div>location</div>
  },
  {
    path: "/services",
    element: <div>services</div>
  },
  {
    path: "/feedback",
    element: <div>services</div>
  },
  {
    path: "/contacts",
    element: <div>services</div>
  },


]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
