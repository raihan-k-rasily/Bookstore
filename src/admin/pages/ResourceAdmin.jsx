import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
function ResourceAdmin() {
  const [bookListStatus, setBookListStatus] = useState(true)
  const [userListStatus, setUserListStatus] = useState(false)

  return (
    <>

      <AdminHeader />

      <>
        <div className="md:grid grid-cols-4 gaps-2 ">
          <div className='col-span-1'>
            <AdminSideBar />
          </div>
          <div className='col-span-3'>
            <div className='p-10'>
              <h1 className="text-3xl text-center">All Resources</h1>
            </div>
            <div className='flex justify-center items-center my-5'>
              <p onClick={() => { setBookListStatus(true); setUserListStatus(false); }} className={bookListStatus ? 'text-blue-500 p-4 border-gray-300 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-300 cursor-pointer'} >Sell Books</p>
              <p onClick={() => { setUserListStatus(true); setBookListStatus(false); }} className={userListStatus ? 'text-blue-500 p-4 border-gray-300 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-300 cursor-pointer'} >Book Status</p>
            </div>
            {
              bookListStatus &&
              <div className="md:grid grid-cols-4 w-full mt-5">
                <div className="p-3">
                  <div className="shadow p-3 rounded mx-2">
                    <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
                    <div className="flex justify-center flex-col items-center ">
                      <p className="text-blue-700 font-bold text-lg">Author</p>
                      <p >Book Title</p>
                      <p>$ 400</p>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3 rounded mx-2">
                    <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
                    <div className="flex justify-center flex-col items-center ">
                      <p className="text-blue-700 font-bold text-lg">Author</p>
                      <p >Book Title</p>
                      <p>$ 400</p>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3 rounded mx-2">
                    <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
                    <div className="flex justify-center flex-col items-center ">
                      <p className="text-blue-700 font-bold text-lg">Author</p>
                      <p >Book Title</p>
                      <p>$ 400</p>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3 rounded mx-2">
                    <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
                    <div className="flex justify-center flex-col items-center ">
                      <p className="text-blue-700 font-bold text-lg">Author</p>
                      <p >Book Title</p>
                      <p>$ 400</p>

                    </div>
                  </div>
                </div>
              </div>
            }
            {
              userListStatus &&
              <div className="md:grid grid-cols-3 w-full my-3">
                <div className="shadow rounded p-3 mx-4 bg-gray-200">
                  <p className="text-red-700 font-bold text-lg">
                    ID : 8958588559505
                  </p>
                  <div className="flex items-center mt-3">
                    <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="user image" />
                    <div className='flex flex-col text-lg ml-6'>
                      <p className='text-blue-800'>User Name</p>
                      <p>email</p>
                    </div>
                  </div>
                </div>
                <div className="shadow rounded p-3 mx-4 bg-gray-200">
                  <p className="text-red-700 font-bold text-lg">
                    ID : 8958588559505
                  </p>
                  <div className="flex items-center mt-3">
                    <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="user image" />
                    <div className='flex flex-col text-lg ml-6'>
                      <p className='text-blue-800'>User Name</p>
                      <p>email</p>
                    </div>
                  </div>
                </div>
                <div className="shadow rounded p-3 mx-4 bg-gray-200">
                  <p className="text-red-700 font-bold text-lg">
                    ID : 8958588559505
                  </p>
                  <div className="flex items-center mt-3">
                    <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="user image" />
                    <div className='flex flex-col text-lg ml-6'>
                      <p className='text-blue-800'>User Name</p>
                      <p>email</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>


      </>

      <Footer />

    </>
  )
}

export default ResourceAdmin