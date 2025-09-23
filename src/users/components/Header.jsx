import { faInstagram, faXTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  const [listStatus,setListStatus] = useState(false)
  return (
    <>
      <div className="grid grid-cols-3 p-3">
        {/* LOGO */}
        <div className='flex items-center'>
          <img width={'50px'} height={'50px'} src="/Logo.png" alt="Logo" />
          <h1 className="text-2xl font-bold ms-2 md:hidden">BOOKSTORE</h1>
        </div>
        {/* TITLE */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-3xl font-bold'>BOOKSTORE</h1>
        </div>
        {/* LOGIN BLOCK*/}
        <div className='md:flex justify-end items-center hidden'>

          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          {/* <FontAwesomeIcon icon={faLinkedin} /> */}
          {/* LOGIN LINK */}
          <Link to={'/login'}><button className='border font-bold border-black rounded px-2 py-2 hover:bg-black hover:text-white'>
          <FontAwesomeIcon icon={faUser} className='me-2'/>Login</button></Link>
        </div>

      </div>
      <nav className='w-full p-3 bg-black text-white md:flex justify-center items-center'>
        {/* MENUBAR & LOGIN */}
        <div className='flex justify-between items-center text-2xl md:hidden'>
          <button onClick={()=>setListStatus(!listStatus)}><FontAwesomeIcon icon={faBars} /></button>
          {/* LOGIN LINK */}
          <Link to={'/login'}><button className='border font-bold border-white rounded px-2 py-2 hover:bg-white hover:text-black'>
          <FontAwesomeIcon icon={faUser} className='me-2'/>Login</button></Link>
        </div>
        <ul className={listStatus?'flex flex-col':'md:flex justify-center items-center hidden'}>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'}>HOME</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/all-books'}>BOOKS</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/careers'}>CAREERS</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/contact'}>CONTACT</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header