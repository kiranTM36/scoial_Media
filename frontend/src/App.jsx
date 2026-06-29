import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import { Signup } from './pages/auth/Signup'
import Login from './pages/auth/Login'
import Friends from './pages/Friends'
import Layout from './pages/Layout'
import Friend from './pages/components/Friend'
import Navbar from './pages/components/Navbar'
import NavbarLayout from './pages/NavbarLayout'
import Ecard from './pages/Ecom/Ecard'
import Epage from './pages/Ecom/Epage'

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-[#F2F4F7] min-h-screen'>
        
        <div className='relative top-[8vh]'>
          <Routes>

            {/* WITH Navbar + Sidebar */}
            <Route element={<Layout />}>
              <Route index element={<Home />} />
            </Route>

            <Route element={<NavbarLayout />}>
              <Route path="friends" element={<Friends />} />
              <Route path='market' element={<Epage />} />
            </Route>

            {/* WITHOUT Navbar */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path='/user' element={<Friend />} />

          </Routes>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App