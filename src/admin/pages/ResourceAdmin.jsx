import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
function ResourceAdmin() {
  return (
       <>

      <AdminHeader />

      <>
        <div className="md:grid grid-cols-4 ">
          <div className='col-span-1'>
            <AdminSideBar />
          </div>
            <div>resources</div>
        </div>


      </>

      <Footer />

    </>
  )
}

export default ResourceAdmin