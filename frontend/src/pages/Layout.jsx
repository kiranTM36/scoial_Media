import React from 'react'
import Friend from './components/Friend'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import LOUS from '../images/Lou.jpg'
import Story from './components/Story'
import {CirclePlus } from 'lucide-react'

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
          <div className='h-[7vh] w-full bg-white shadow-md rounded-md mt-2.5 flex justify-between p-2 gap-2.5 items-center'>
            <div className='h-[6vh] w-[6vh] rounded-full bg-[#F0F2F5]'></div>
            <input type="text" className='w-3/4 outline-none p-2  h-[5vh] rounded-2xl bg-[#F0F2F5]' />
            <div className='h-[6vh] w-[6vh] rounded-full flex justify-center items-center bg-[#F0F2F5]'><CirclePlus className='hover:scale-105' /></div>
          </div>
           <div className='flex overflow-x-auto gap-1 py-1.5 shrink-0 mt-1 scrollbar-hide'>
              <Story />
              <Story />
              <Story />
              <Story />
              <Story />
           </div>
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