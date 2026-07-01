// NavbarLayout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Story from './components/Story'

const NavbarLayout = () => {
    return (
        <>
            <Navbar />
            <div className='grid grid-cols-[20%_80%] h-[calc(100vh-8vh)]'>
                <div className='overflow-y-auto relative p-2 z-1 shadow-2xl bg-white flex justify-start items-center flex-col'>
                    <div className='text-lg font-normal p-1 py-2 hover:bg-[#F2F4F7] w-full rounded-md'>Home</div>
                    <div className='text-lg font-normal p-1 py-2 hover:bg-[#F2F4F7] w-full rounded-md'>Home</div>
                    <div className='text-lg font-normal p-1 py-2 hover:bg-[#F2F4F7] w-full rounded-md'>Home</div>
                    <div className='text-lg font-normal p-1 py-2 hover:bg-[#F2F4F7] w-full rounded-md'>Home</div>
                    <div className='text-lg font-normal p-1 py-2 hover:bg-[#F2F4F7] w-full rounded-md'>Home</div>
                </div>
                <div className='pt-2 overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default NavbarLayout