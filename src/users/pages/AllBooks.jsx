import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AllBooks = () => {

  const [listStatus, setListStatus] = useState(false)
  return (
    <>

      <Header />
      <>
      <div className="flex justify-center items-center flex-col my-5">
          <h1 className="text-3xl font-bold">Collections</h1>
          <div className="flex my-5 w-full p-3">
            <input type="text" className='p-2 rounded border border-gray-400 text-black w-100 placeholder-gray-400' placeholder='Search by Title'/>
            <button className='px-5 bg-blue-400'>Search</button>
          </div>
         </div>
        {/* Grid */}
        <div className='md:grid grid-cols-4 md:px-20 p-5'>
          {/* Filter */}
          <div className='col-span-1'>

            <div className='flex justify-between'>
              <h1 className='text-2xl font-semibold'>Filter</h1>
              <button onClick={() => setListStatus(!listStatus)} className='text-2xl md:hidden'><FontAwesomeIcon icon={faBars} /></button>

            </div>
            <div className={listStatus ? 'block' : 'md:block hidden'}>
              <div className="mt-3">
                <input type="radio" id='Literary' name='filter' />
                <label htmlFor="Literary">Literary Fiction</label>
              </div><div className="mt-3">
                <input type="radio" id='Philosophy' name='filter' />
                <label htmlFor="Literary">Philosophy</label>
              </div><div className="mt-3">
                <input type="radio" id='Romance' name='filter' />
                <label htmlFor="Literary">Romance</label>
              </div><div className="mt-3">
                <input type="radio" id='Mystery' name='filter' />
                <label htmlFor="Literary">Mystery</label>
              </div><div className="mt-3">
                <input type="radio" id='Politics' name='filter' />
                <label htmlFor="Literary">Politics</label>
              </div><div className="mt-3">
                <input type="radio" id='self' name='filter' />
                <label htmlFor="Literary">Self-help</label>
              </div><div className="mt-3">
                <input type="radio" id='Autobiography' name='filter' />
                <label htmlFor="Literary">Autobiography</label>
              </div><div className="mt-3">
                <input type="radio" id='NoFilter' name='filter' />
                <label htmlFor="Literary">No-Filter</label>
              </div>
            </div>
          </div>
          {/* Books */}
          <div className="col-span-3">
            <div className="md:grid grid-cols-4">
              <div className="shadow p-3 rounded mx-2">
                <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
                <div className="flex justify-center flex-col items-center ">
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p >Book Title</p>
                  <Link to='/books/:id/view' className='bg-blue-800 p-2 text-white'>View Book</Link>

                </div>
              </div>
              <div className="shadow p-3 rounded mx-2">
                <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
                <div className="flex justify-center flex-col items-center ">
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p >Book Title</p>
                  <Link to='/books/:id/view' className='bg-blue-800 p-2 text-white'>View Book</Link>

                </div>
              </div>
              <div className="shadow p-3 rounded mx-2">
                <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
                <div className="flex justify-center flex-col items-center ">
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p >Book Title</p>
                  <Link to='/books/:id/view' className='bg-blue-800 p-2 text-white'>View Book</Link>

                </div>
              </div>
              <div className="shadow p-3 rounded mx-2">
                <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
                <div className="flex justify-center flex-col items-center ">
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p >Book Title</p>
                  <Link to='/books/:id/view' className='bg-blue-800 p-2 text-white'>View Book</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  )
}

export default AllBooks