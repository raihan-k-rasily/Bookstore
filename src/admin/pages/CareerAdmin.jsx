import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function CareerAdmin() {
  const [jobListStatus, setJobListStatus] = useState(true)
  const [applicationListStatus, setApplicationListStatus] = useState(false)
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
              <p onClick={() => { setJobListStatus(true); setApplicationListStatus(false); }} className={jobListStatus ? 'text-blue-500 p-4 border-gray-300 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-300 cursor-pointer'} >Job Post</p>
              <p onClick={() => { setApplicationListStatus(true); setJobListStatus(false); }} className={applicationListStatus ? 'text-blue-500 p-4 border-gray-300 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-300 cursor-pointer'} >View Aplications</p>
            </div>
            {
              jobListStatus &&
              <div>
                <div className='flex justify-between items-center my-5'>

                  <div>
                    <input type="text" className='p-2 me-2 rounded border border-gray-400 text-black w-100 placeholder-gray-400' placeholder='Job Title' />
                    <button className='p-2  bg-blue-700 text-white'>Search</button>
                  </div>
                  <div>add</div>

                </div>
                {/* job box  duplicate*/}
                <div className='border w-full rounded shadow-2xl p-4'>
                  <div>
                    <div className='flex justify-between'>
                      <h1 className='m-3 font-bold'>job title </h1>
                      <button onClick={() => setModalStatus(true)} className='md:px-5 px-3 bg-red-700 hover:bg-white border border-red-500 hover:text-red-500 font-bold text-white'>Delete <FontAwesomeIcon icon={faTrash} className='text-xl' /></button>
                    </div>
                    <div className='px-5 pe-29'> <hr className='my-3 ' /></div>

                    <div>
                      <p className='my-3 text-blue-400'> <FontAwesomeIcon icon={faLocationDot} className='text-blue-400 ' /> Location</p>
                      <p className='my-3'>  Job Type: Senior Level</p>

                      <p className='my-3'> Salary: 10 lakhs</p>

                      <p className='my-3'> Qualification: M-Tech /B-Tech/BCA/MCA</p>

                      <p className='my-3'>Experience: 5-7</p>

                      <p className='my-3 text-justify'> Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


                    </div>
                  </div>



                </div>
              </div>
            }
            {
              applicationListStatus &&
              <div className='p-10 overflow-x-hidden'>
                <table className='w-full my-3 shadow'>
                  <thead>
                    <tr>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Sl No.</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Qulification</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>E-Mail</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Phone No.</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Cover Ltter</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-gray-500 p-3 text-center'>1</td>
                      <td className='border border-gray-500 p-3 text-center'>Frontend Developer</td>
                      <td className='border border-gray-500 p-3 text-center'>Max Miller</td>
                      <td className='border border-gray-500 p-3 text-center'>BCA</td>
                      <td className='border border-gray-500 p-3 text-center'>maxmiller@gmail.com</td>
                      <td className='border border-gray-500 p-3 text-center'>+01 939393 33333</td>
                      <td className='border border-gray-500 p-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim repudiandae exercitationem corporis eligendi magnam, amet perspiciatis voluptatum ipsum incidunt dolores. Autem ipsa dolorum totam rem animi vel impedit qui.</td>
                      <td className='border border-gray-500 p-3 text-center text-blue-700 underline'><Link>Resume</Link></td>
                    </tr>
                  </tbody>
                </table>

              </div>
            }
          </div>
        </div>


      </>

      <Footer />

    </>
  )
}

export default CareerAdmin