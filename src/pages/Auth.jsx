import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Auth = ({register}) => {
  return (
    <div className='w-full min-h-screen flex  justify-center items-center flex-col bg-[url("/bg-auth.jpg")]  bg-cover bg-center'>
    <div className="p-10">
      <h1 className="text-3xl font-bold">Book Store</h1>
      <div className='bg-black text-white p-5 text-center my-5'>
        <div style={{width:'100px',height:'100px',borderRadius:'50%'}} className='border mb-5 flex justify-center items-center'>
          <FontAwesomeIcon icon={faUser} className='text-3xl'/>
        </div>
        <h1 className='text-2xl'>{register?"Register":"Login"}</h1>
        <form className="my-5 w-full">
          {
            register &&
            
          <input type="text" placeholder='Username' className="bg-white p-2 rounded placeholder-gray-500 my-5" />
          }
          <input type="text" placeholder='Email ID' className="bg-white p-2 rounded placeholder-gray-500 my-5" />
          <input type="text" placeholder='Password' className="bg-white p-2 rounded placeholder-gray-500" />
          <div className="flex justify-between">
            <p className="text-sm text-orange-300">*Never share your password with others</p>
            <button className='text-sm underline'>Forget Password</button>
          </div>
          <div className="text-center">
            {
              register?
              
            <button className="bg-green-700 p-2 w-full rounded">Register</button>
            
            :
            
            <button className="bg-green-700 p-2 w-full rounded">Login</button>
            }
          </div>
          {/* Google auth */}
          <div className="my-5 text-center">
            {
              register?
            <p className='text-blue-600'>Are you Already a user? <Link to={'/login'} className='underline ms-5'>Login</Link> </p>
            :
            <p className='text-blue-600'>Are you  a New user? <Link to={'/register'} className='underline ms-5'>Register</Link> </p>
              
            }
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Auth