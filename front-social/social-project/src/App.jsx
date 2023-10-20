import { BrowserRouter, Routes, Route, useRoutes, Navigate } from 'react-router-dom'
import './App.css'
import 'normalize.css'
import AuthPage from './pages/auth/AuthPage'
import Layout from './pages/LayOut'

function App() {
  const routes = useRoutes([
    {
      path: '/auth',
      element: <Navigate to={'/auth'} />,
    },
    {
      path: '/auth',
      element: <AuthPage />,
    },
    {
      path: '/dashboard/*',
      element: <Layout />,
      children: [
        {
          path: 'groups',
          element: <>asd</>,
        },
      ],
    },
  ])

  return routes
}

export default App
