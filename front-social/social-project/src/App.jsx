import { useState } from 'react'
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'normalize.css'
import AuthPage from './pages/auth/AuthPage'
import Main from './pages/main/Main'
import GroupsPage from './pages/groups/GroupsPage'
import Group1 from './pages/groups/list/Group1'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/group1" element={<Group1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
