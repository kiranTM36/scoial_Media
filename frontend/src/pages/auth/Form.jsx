import React from 'react'
import { Link } from 'react-router-dom'

const Form = ({name}) => {
  return (
    <div className='h-[80vh] flex justify-center items-center'>
        <form class="bg-white text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">{name}</h2>

            {name === "Sign Up" && (<input id="email" class="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3" type="text" placeholder="Username" required />)}
            <input id="email" class="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3" type="email" placeholder="Email" required />
            <input id="email" class="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3" type="text" placeholder="Password" required />

            <button class="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">{name}</button>
            
            {name === "Login" && (<p class="text-center mt-4">Don't have an account? <Link to="/signup" class="text-blue-500 underline">Sign Up</Link></p>)}
            {name === "Sign Up" && (<p class="text-center mt-4">Already have an account? <Link to="/login" class="text-blue-500 underline">Log In</Link></p>)}
        </form>
    </div>
  )
}

export default Form