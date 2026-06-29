import React from 'react'
import Rick from '../../images/Rick.avif'

const Friend = () => {
  return (
    <div>
      <div className='h-[50vh] bg-white w-[15vw] rounded-2xl overflow-hidden border-1 border-gray-200 shadow-md flex flex-col'>
        <div className='h-[30vh] bg-blue-600 bg-center bg-cover' style={{
          backgroundImage : `url(${Rick})` 
        }}></div>
        <div className='flex justify-between py-[10px] h-[20vh] w-full items-center flex-col '>
          <div className='w-full px-2'><h2 className='text-lg text-bold'>Richard Daniel Sanchez</h2></div>
          <div className='flex justify-center items-center gap-1 w-[14vw] flex-col'>
            <button className='bg-[#0866FF] w-full p-1.5 rounded-lg text-white'>Confirm</button>
            <button className='bg-[#E2E5E9] w-full p-1.5 rounded-lg text-black'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Friend