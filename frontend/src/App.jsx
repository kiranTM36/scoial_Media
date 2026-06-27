import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/components/Navbar'
import './index.css'
import { Signup } from './pages/auth/Signup'
import Login from './pages/auth/Login'
import Friends from './pages/Friends'
import Layout from './pages/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-[#F2F4F7] min-h-screen'>
        <Navbar />

        <div className='relative top-[11vh]'>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="friends" element={<Friends />} />
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App