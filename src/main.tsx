import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import './styles.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DecodePage from './decode'
import HashPage from './hash'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/decode/',
    element: <DecodePage />,
  },
  {
    path: '/hash/',
    element: <HashPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
