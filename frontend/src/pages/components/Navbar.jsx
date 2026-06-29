import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'
import { Home, User, Clapperboard,Store, UsersRound, CircleUserRound,UserRound, Bell , MessageCircle } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='bg-[#F2F4F7]'>
        <div className='h-[8vh] fixed items-center justify-center z-10 left-0 top-0 w-screen bg-[#ffffff] shadow-md grid grid-cols-[30%_40%_30%]'>
            <div className='h-full flex justify-start px-4 gap-1 items-center'>
                <div>Name</div>
                <input type="text" className='bg-[#F0F2F5] p-2 px-4 rounded-2xl w-full/1.5' placeholder='Search FaceBook...' />
            </div>

            <div className='h-full flex justify-between items-center'>
                <Link to=''><div><Home /></div></Link>
                <Link to='/friends'><div><User /></div></Link>
                <Link to=''><div><Clapperboard /></div></Link>
                <Link to='/market'><div><Store /></div></Link>
                <Link><div><UsersRound /></div></Link>
            </div>
            <div className='h-full flex justify-end items-center gap-1 pr-5'>
                <Link ><div className='bg-[#F1F2F4] border-1 border-gray-300 h-[6vh] w-[6vh] flex justify-center items-center rounded-full'><MessageCircle /></div></Link>
                <Link ><div className='bg-[#F1F2F4] border-1 border-gray-300 h-[6vh] w-[6vh] flex justify-center items-center rounded-full'><Bell /></div></Link>
                <div className="relative group">
                        <div className="bg-[#F1F2F4] border border-gray-300 h-[6vh] w-[6vh] flex justify-center items-center rounded-full cursor-pointer">
                            <UserRound />
                        </div>

                        <div className="absolute right-0 top-full pt-2 hidden group-hover:flex z-50">
                            <div className="bg-white shadow-lg rounded-lg p-2 min-w-[120px]">
                                <Link to="/login">
                                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                                        Login
                                    </button>
                                </Link>

                                <Link to="/signup">
                                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Navbar