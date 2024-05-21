import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Jobs from './Components/Jobs/Jobs';
import ErrorPages from './Components/ErrorPages/ErrorPages';





const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
errorElement:<ErrorPages></ErrorPages>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
       
      },
      {
        path:"/jobs",
        element:<Jobs></Jobs>
      }

    ]
   
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
