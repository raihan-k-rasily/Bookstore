import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const [sellBookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)
  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className='bg-black'></div>
      <div style={{ height: '230px', width: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }} className="bg-white p-3">
        <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png" alt="Profile" />
      </div>
      <div className="md:flex justify-between px-20 mt-5">
        <div className="flex items-center">
          <h1 className='font-bold md:text-3xl text-2xl'>Username</h1>
          <FontAwesomeIcon className='text-blue-400 ms-3' icon={faCircleCheck} />
        </div>
        <div>Edit</div>
      </div>
      <p className="md:px-20 px-5 my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa laboriosam tempora quas? Ea voluptas, a iusto iste est suscipit? Distinctio rerum magnam aspernatur? Ipsum officiis vitae delectus explicabo suscipit.
        Vel exercitationem a iusto recusandae dignissimos quos earum doloribus. Maxime adipisci vel, amet dignissimos repellat atque dicta. Sed tenetur consequuntur sint consequatur, soluta doloremque molestiae ea nihil quaerat hic ut.
        Placeat facere ipsam debitis maiores doloribus, ducimus unde? Animi ad velit voluptatem doloribus dolorem modi ex nihil placeat tempore ratione impedit est quaerat, natus magnam aperiam sint, exercitationem dignissimos veritatis?
      </p>
      <div className='md:px-40'>
        <div className='flex justify-center items-center my-5'>
          <p onClick={() => { setSellBookStatus(true); setBookStatus(false); setPurchaseStatus(false); }} className={sellBookStatus ? 'text-blue-500 p-4 border-gray-300 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-300 cursor-pointer'} >Sell Books</p>
          <p onClick={() => { setBookStatus(true); setPurchaseStatus(false); setSellBookStatus(false); }} className={bookStatus ? 'text-blue-500 p-4 border-gray-300 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-300 cursor-pointer'} >Book Status</p>
          <p onClick={() => { setPurchaseStatus(true); setBookStatus(false); setSellBookStatus(false); }} className={purchaseStatus ? 'text-blue-500 p-4 border-gray-300 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-300 cursor-pointer'} >Purchase History </p>
        </div>
        {/* CONTENTS */}
        {/* SELL BOOKS */}
        {
          sellBookStatus &&
          <div>
            <div className="bg-gray-200 p-10 my-20 mx-5">
              <h1 className="text-center text-3xl font-medium">Book Details</h1>
              <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className='px-3'>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Title' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Author' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='No. of Pages' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Image URL' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Price' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Discount Price' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className='mb-3 px-3'>
                    <textarea name="Abstract" placeholder='Abstract' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' rows={'5'} id=""></textarea>
                  </div>


                </div>
                <div className="px-3">
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Publisher' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Language' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='ISBN' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Category' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 flex justify-center items-center mt-10">
                    <label htmlFor="bookImage">
                      <input type="file" name="" id="bookImage" className='hidden' />
                      <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png" alt="" />
                    </label>
                  </div>

                </div>

              </div>

              <div className=" w-full flex justify-end">

                <button className="py-2 px-3 rounded bg-black text-white">Reset</button>
                <button className="py-2 px-3 rounded bg-blue-900 text-white mx-2">Submit</button>

              </div>
            </div>
          </div>
        }
        {/* BOOK STATUS */}
        {
          bookStatus &&
          <div className="p-10 my-20 shadow rounded">
            {/* duplicate div according */}
            <div className="p-5 rounded mt-4 bg-gray-100">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                  <h1 className='text-2xl'>Book Title</h1>
                  <h2 className="text-xl">Author</h2>
                  <h3 className="text-lg text-blue-500">$300</h3>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatem consequatur nulla cupiditate harum non consectetur veritatis possimus consequuntur, veniam praesentium, natus commodi esse nesciunt! Consequatur enim velit non amet.
                    Ipsam asperiores repellendus, culpa ipsa aut adipisci necessitatibus ut fuga iste. Quos beatae nulla iusto eius necessitatibus perspiciatis inventore debitis accusantium accusamus consequatur, aliquam temporibus sapiente corporis labore totam! Pariatur.
                    Ex hic perferendis amet itaque vel ratione dolor quisquam placeat ipsam ducimus esse nostrum odit dignissimos enim alias ullam tempore a velit porro, perspiciatis ut maxime. A porro rem quidem.
                  </p>
                  <div className="flex mt-3">
                    <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src="https://media.istockphoto.com/vectors/pending-red-rubber-stamp-icon-on-transparent-background-vector-id891769228?k=6&m=891769228&s=612x612&w=0&h=uyPAxNgnXD6dFKwHr_dyeqUVtZGAAsePus7AfeEGRn0=" alt="" />
                    <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src="https://tse3.mm.bing.net/th/id/OIP.79yX24EZnAo9h08exhX1HAHaGp?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                  </div>
                </div>
                <div className='px-4 w-full mt-4 md:mt-0'>
                    <img src="https://1.bp.blogspot.com/-HRRu6dw6FTI/UiGGOYfeeII/AAAAAAAAAV4/aLFjY4lAAXkpQzVzVrmi0Nicu-kNwqeKwCPcB/s1600/german.jpg" alt="book" />
                    <div className="mt-4 flex justify-end">
                       <button className="py-2 px-3 rounded  border border-red-400 text-red-500 hover:bg-red-500 hover:text-white">Delete</button>
                    </div>

                </div>
              </div>
            </div>
          </div>
        }
        {/* Purchase STATUS */}
        {
          purchaseStatus &&
          <div className="p-10 my-20 shadow rounded">
            {/* duplicate div according */}
            <div className="p-5 rounded mt-4 bg-gray-100">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                  <h1 className='text-2xl'>Book Title</h1>
                  <h2 className="text-xl">Author</h2>
                  <h3 className="text-lg text-blue-500">$300</h3>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatem consequatur nulla cupiditate harum non consectetur veritatis possimus consequuntur, veniam praesentium, natus commodi esse nesciunt! Consequatur enim velit non amet.
                    Ipsam asperiores repellendus, culpa ipsa aut adipisci necessitatibus ut fuga iste. Quos beatae nulla iusto eius necessitatibus perspiciatis inventore debitis accusantium accusamus consequatur, aliquam temporibus sapiente corporis labore totam! Pariatur.
                    Ex hic perferendis amet itaque vel ratione dolor quisquam placeat ipsam ducimus esse nostrum odit dignissimos enim alias ullam tempore a velit porro, perspiciatis ut maxime. A porro rem quidem.
                  </p>
                  <div className="flex mt-3">
                    <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src="https://tse4.mm.bing.net/th/id/OIP.XyeV6tuQjNHBkPtHR0ntegHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                  </div>
                </div>
                <div className='px-4 w-full mt-4 md:mt-0'>
                    <img src="https://1.bp.blogspot.com/-HRRu6dw6FTI/UiGGOYfeeII/AAAAAAAAAV4/aLFjY4lAAXkpQzVzVrmi0Nicu-kNwqeKwCPcB/s1600/german.jpg" alt="book" />
                    <div className="mt-4 flex justify-end">
                       <button className="py-2 px-3 rounded  border border-red-400 text-red-500 hover:bg-red-500 hover:text-white">Delete</button>
                    </div>

                </div>
              </div>
            </div>
          </div>
        }

      </div>
      <Footer />


    </>
  )
}

export default Profile