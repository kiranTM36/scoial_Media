import React from 'react'
import Card from './components/Card'

const Home = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center gap-3 scrollbar-hide'>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Home