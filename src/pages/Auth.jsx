import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer   } from 'react-toastify'
ToastContainer

const Auth = ({ register }) => {
  const [viewPasswordStatus, setViewPasswordStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "" })

  // console.log(userDetails);

  const handleRegister = () => {
    console.log("Inside handleRegister");
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      toast.info("COMPLETELY FILL THE FORM");

    } else {
      toast.success("PROCEED TO API CALL");

    }

  }



  return (
    <>
      <div className="flex items-center justify-center p-5   w-full min-h-screen  flex-col  bg-[url('/bg-auth.jpg')] bg-no-repeat bg-cover">
        <h1 className='font-bold text-3xl my-5 text-black' >BOOK STORE</h1>
        <div className='bg-black  p-5 rounded-2xl  shadow-2xl  flex-col '>
          <div className='flex items-center justify-center flex-col ' >
            <FontAwesomeIcon icon={faUser} className='border border-white p-5 text-white text-2xl rounded-full  ' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            <p className='font-bold text-white text-2xl my-2'>{register ? "Register" : "Login"}</p>
          </div>
          <form>
            {register &&
              <input value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='User Name' className='px-3 py-2 my-2 w-full bg-white rounded' />
            }
            <input type="email" value={userDetails.email} onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} placeholder='Email Id' className='px-3 py-2 my-2 w-full bg-white rounded' />
            <div className='flex items-center'>
              <input type={viewPasswordStatus ? "text" : "password"} value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} placeholder='Password' className='px-3 py-2 my-2 w-full bg-white rounded' />
              {/* {
                    !viewPasswordStatus?
                    <FontAwesomeIcon onClick={()=>setViewPasswordStatus(!viewPasswordStatus)} style={{marginLeft:'-30px'}} className='text-gray-500 cursor-pointer' icon={faEye}/>
                    :
                   <FontAwesomeIcon onClick={()=>setViewPasswordStatus(!viewPasswordStatus)}  style={{marginLeft:'-30px'}} className='text-gray-500 cursor-pointer' icon={faEyeSlash}/>
                   } */}
            </div>
            <div className='flex justify-between mb-5 '>
              <p className='text-sm text-yellow-400 tracking-tighter'>*never share  the password  with others</p>
              <p className='underline text-sm text-white'>forget password</p>
            </div>

            {
              register ?
                <button type='button' onClick={handleRegister} className='w-full  py-2 rounded bg-green-800 text-white'>Register</button>
                :
                <button type='button' className='w-full  py-2 rounded bg-green-800 text-white'>Login</button>
            }
            <div className='text-center my-3 text-white'>
              ---------or------------
            </div>
            {/* google auth  */}
            {
              register ?
                <p className='text-white text-center text-sm' >Are You Already A user? <Link to={'/login'} className='underline text-yellow-400' >Login</Link></p>
                :
                <p className='text-white text-center text-sm'>Are You  A New  USer? <Link to={'/register'} className='underline text-yellow-400' >Register</Link></p>
            }

          </form>


        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default Auth