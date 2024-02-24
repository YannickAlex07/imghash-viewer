import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import './styles.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Hash from './hash'
import Img from './img'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/hash/',
    element: <Hash />,
  },
  {
    path: '/img/',
    element: <Img />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
