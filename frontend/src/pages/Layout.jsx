import React from 'react'
import Friend from './components/Friend'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const Layout = () => {
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-[30%_40%_30%] h-[calc(100vh-11vh)]">
        
        {/* Left Sidebar */}
        <div className="overflow-y-auto px-2">
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
        </div>

        {/* Middle Content */}
        <div className="overflow-y-auto">
          <Outlet />
        </div>

        {/* Right Sidebar */}
        <div className="overflow-y-auto">
          Right Side Content
        </div>

      </div>
    </div>
  )
}

export default Layout