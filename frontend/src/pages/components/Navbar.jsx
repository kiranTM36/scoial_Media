import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'
import { Home, User, Clapperboard,Store, UsersRound } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='bg-[#F2F4F7]'>
        <div className='h-[8vh] fixed z-10 left-0 top-0 w-screen bg-[#ffffff] shadow-md grid grid-cols-[30%_40%_30%]'>
            <div className='h-full flex justify-start p-4 gap-1 items-center'>
                <div>Name</div>
                <input type="text" className='bg-amber-300' />
            </div>

            <div className='h-full flex justify-between items-center'>
                <Link to=''><div><Home /></div></Link>
                <Link to='/'><div><User /></div></Link>
                <Link to=''><div><Clapperboard /></div></Link>
                <Link to=''><div><Store /></div></Link>
                <Link><div><UsersRound /></div></Link>
            </div>
            <div className='h-full'></div>
        </div>
    </div>
  )
}

export default Navbar