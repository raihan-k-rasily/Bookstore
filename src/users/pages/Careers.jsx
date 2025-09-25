import React from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareUpRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Careers() {
  return (
    <>
      <Header />

      <div className="md:px-40 p-5">
        <div className="text-center my-5">
          <h1 className="text-3xl font-bold mb-5">CONTACTS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellat commodi optio, laudantium magnam accusamus, est asperiores in earum dolore ut rerum ullam architecto doloremque exercitationem nisi fugit iusto! Autem.
            Esse illo sequi magni nesciunt, minima dolorum, ullam debitis facilis tenetur voluptatem quod? Tenetur ratione asperiores fugiat molestias! Magni labore eos nihil rerum dignissimos necessitatibus adipisci dicta, reprehenderit aliquid nostrum.</p>
        </div>
        <div className='my-5'>
          <h1 className='text-2xl font-bold'>Crrent Openings</h1>
          <div>
            <input type="text" className='p-2 rounded border border-gray-400 text-black w-100 placeholder-gray-400' placeholder='Job Title' />
            <button className='px-5 bg-blue-400'>Search</button>
          </div>
          {/* Duplicate Openings */}
          <div className="border border-gray-200 p-5 shadow my-5">
            <div className="flex mb-5">
              <div className="flex mb-5">
                <div className="w-full">
                  <h1 className="text-xl">HR Assistant</h1>
                  <hr />
                </div>
              </div>
              </div>
              <p className='text-lg my-2'> <FontAwesomeIcon icon={faLocationDot}/> Kochi</p> 
              <p className='text-lg my-2'>Job Type : Full Time</p> 
              <p className='text-lg my-2'>Salary : 20000-30000/Month</p> 
              <p className='text-lg my-2'>Qualification : </p> 
              <p className='text-lg my-2'>Experience : 1-2yrs</p> 
              <p className='text-lg my-2'>Description : </p> 
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Careers