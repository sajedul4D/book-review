import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import ListBook from './Component/ListBook/ListBook.jsx';
import BookDetalis from './Component/BookDetails.jsx/BookDetalis.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listedbooks',
        loader:()=>fetch('/Book.json'),
        element:<ListBook></ListBook>
      },
      {
        path:'/book/:bookId',
        loader:()=>fetch('/Book.json'),
        element:<BookDetalis></BookDetalis>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
