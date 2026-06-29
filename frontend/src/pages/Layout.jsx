import React from 'react'
import Friend from './components/Friend'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import LOUS from '../images/Lou.jpg'

const Layout = () => {
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-[30%_40%_30%] h-[calc(100vh-11vh)]">
        
        {/* Left Sidebar */}
        <div className="overflow-y-auto px-2">
          
        </div>

        {/* Middle Content */}
        <div className="overflow-y-auto">
          <Outlet />
        </div>

        {/* Right Sidebar */}
        <div className="overflow-y-auto">
          <div className='flex justify-center items-center mt-2'>
            <div className='h-[50vh] w-[20vw] rounded-2xl bg-center shadow-md bg-cover' style={{
              backgroundImage : `url(${LOUS})`
            }}></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Layout