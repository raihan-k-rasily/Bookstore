import React from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';


const ViewBook = () => {
  return (
    <>
      <Header/>
      <div className='md:m-10 m-5' >
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4 gap-x-10">
            <div className="col-span-1">
              <img className='w-full' src="https://th.bing.com/th/id/R.af1b759ce20d3486168629f0209de64e?rik=gALZ5%2buZmMAhuw&riu=http%3a%2f%2fwww.theindianbookstore.in%2fcdn%2fshop%2fproducts%2fWebsiteNew_24.png%3fv%3d1661627991&ehk=ZleXjuBqWtwAsKbngv4ILTXSWQXe7k%2fTHticWbQqdpQ%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </div>
            <div className="col-span-3">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold">Title</h1>
                <button className='text-gray-400'><FontAwesomeIcon icon={faEye}/></button>
              </div>
              <p className='text-blue-700'> - Author</p>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="font-bold">Publisher : Demo</p>
                <p className="font-bold">Language : Demo</p>
                <p className="font-bold">No. of Pages : Demo</p>
                <p className="font-bold">Seller Mail : Demo</p>
                <p className="font-bold">Real Price : Demo</p>
                <p className="font-bold">ISBN : Demo</p>   
              </div>
              <div className="md:my-10 my-4">
                <p className="font-bold text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat culpa illum numquam tempore necessitatibus voluptates itaque quibusdam expedita distinctio. Libero culpa labore, ullam ipsum odit itaque voluptatibus nemo aliquam reprehenderit.</p>
              </div>
            <div className='flex justify-end'>
              <button className='bg-blue-900 text-white p-2 rounded'><FontAwesomeIcon icon={faBackward} className='me-3'/>Back</button>
              <button className='bg-green-900 text-white p-2 ms-5 rounded'>Buy $123</button>
            </div>
            </div>

          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default ViewBook