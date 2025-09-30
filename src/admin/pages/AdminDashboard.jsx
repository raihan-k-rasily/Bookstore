import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

function AdminDashbord() {
  return (
    <>

      <AdminHeader />

      <>
        <div className="md:grid grid-cols-4 ">
          <div className='col-span-1'>
            <AdminSideBar />
          </div>
            <div className='col-span-3 p-10'>
              <div className="md:grid grid-cols-3">
                <div className="md:px-5 my-5 md:my-0">
                  <div className="bg-blue-900 p-4 flex items-center text-5xl rounded text-white">
                    <FontAwesomeIcon icon={faBook}/>
                    <div className='text-center'>
                      <h3 className="text-xl">Total No. Of Books</h3>
                      <h3 className="text-3xl">100+</h3>
                    </div>
                  </div>
                </div>
                <div className="md:px-5 my-5 md:my-0">
                  <div className="bg-green-900 p-4 flex items-center text-5xl rounded text-white">
                    <FontAwesomeIcon icon={faBook}/>
                    <div className='text-center'>
                      <h3 className="text-xl">Total No. Of Users</h3>
                      <h3 className="text-3xl">100+</h3>
                    </div>
                  </div>
                </div>
                <div className="md:px-5 my-5 md:my-0">
                  <div className="bg-yellow-900 p-4 flex items-center text-5xl rounded text-white">
                    <FontAwesomeIcon icon={faBook}/>
                    <div className='text-center ms-10 md:ms-0'>
                      <h3 className="text-xl">Total No. Of Employees</h3>
                      <h3 className="text-3xl">100+</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:grid grid-cols-2 p-5">
                <div>bar chart</div>
                <div>pie chart</div>
              </div>
            </div>
        </div>


      </>

      <Footer />

    </>
  )
}

export default AdminDashbord