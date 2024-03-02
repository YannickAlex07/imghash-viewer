import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import './styles.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HashPage from './hash'
import ImagePage from './img'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/hash/',
    element: <HashPage />,
  },
  {
    path: '/image/',
    element: <ImagePage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
