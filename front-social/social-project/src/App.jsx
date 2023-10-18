import { useState } from 'react'
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'normalize.css'
import AuthPage from './pages/auth/AuthPage'
import Main from './pages/main/Main'
import { GroupsPage } from 'antd/lib/avatar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/groups" element={<GroupsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
