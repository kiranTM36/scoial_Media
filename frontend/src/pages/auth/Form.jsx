import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Form = ({name,onEvent}) => {
  const [data, setData] = useState({
    username : "",
    email : "",
    password : ""
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setData({
      ...data, 
      [name] : value
    })
    console.log(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onEvent(data)
  }
  return (
    <div className='h-[80vh] flex justify-center items-center'>
        <form onSubmit={handleSubmit} className="bg-white text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{name}</h2>

            {name === "Sign Up" && (<input  className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3" type="text" name='username' onChange={handleChange} placeholder="Username" required />)}
            <input id="email" className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3" type="email" name='email' placeholder="Email" onChange={handleChange} required />
            <input id="email" className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3" type="password" name='password' placeholder="Password" onChange={handleChange} required />

            <button className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">{name}</button>
            
            {name === "Login" && (<p className="text-center mt-4">Don't have an account? <Link to="/signup" className="text-blue-500 underline">Sign Up</Link></p>)}
            {name === "Sign Up" && (<p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 underline">Log In</Link></p>)}
        </form>
    </div>
  )
}

export default Form