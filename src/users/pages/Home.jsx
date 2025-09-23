import React from 'react'
import Header from "../components/Header"
import Footer from "../../components/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <>
    <Header/>
      {/* LANDING */}
      <div className="flex flex-col justify-center items-center bg-[url(/bg-home.jpg)] h-screen bg-cover bg-center text-white font-bold">
        <h1 className='text-5xl font-bold'>Wonderful Gifts</h1>
        <p>Give your family and friends a book</p>
         <div className='flex justify-between items-center mt-9 h-9 w-100 border border-white bg-white rounded-3xl py-5'>  
          <input className='ms-4 placeholder-grey-600 h-9 w-100 border-none outline-0 text-black' type="text" placeholder='Search Books' />
          <button><FontAwesomeIcon className='text-black me-3' icon={faSearchengin} /></button>
        </div>

      </div>
      {/* ARRIVAL */}
      {/* AUTHOR */}
      {/* TESTIMONY */}
    <Footer/>
    </>
  )
}

export default Home