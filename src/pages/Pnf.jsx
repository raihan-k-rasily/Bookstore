import React from 'react'
import { Link } from 'react-router-dom'


const Pnf = () => {
  return (
    <div className='min-h-screen w-full md:flex justify-center items-center flex-col'>
      <img className='w-100' src="/pnf.gif" alt="page not found" />
      <p>Oh No!</p>
      <h1 className="text-3xl font-semibold">Look Likes You're Lost</h1>
      <p>The page you are looking for is not available</p>
      <Link to={'/'} className='bg-blue-900 text-white rounded p-2 my-5'>Back Home</Link>
    </div>
  )
}

export default Pnf