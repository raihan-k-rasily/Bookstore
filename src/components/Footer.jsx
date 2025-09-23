import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Footer = () => {
  return (
    <>
    <div className='md:grid grid-cols-3 md:gap-9 bg-gray-900 text-white p-10'>
      <div>
        <h4 className='font-bold'>About US</h4>
        <p className='text-justfy mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel sunt aperiam rerum similique nesciunt suscipit facere accusamus dolorum cupiditate mollitia illo nulla eaque, aspernatur sapiente error pariatur commodi itaque?</p>
      </div>
      <div>
        <h4 className='font-bold'>NEWS LETTER</h4>
        <p className='text-justfy mt-5'>Stay updated with our latest treds</p>
        <div className='flex'> 
          <input type="text" placeholder='Email ID' className="p-2 bg-white placeholder-gray-500" />
          <button className='bg-yellow-400 py-2 px-3'><FontAwesomeIcon icon={faArrowRight}/></button>
        </div>
      </div>
      <div>
        <h4 className=''>FOLLOW US</h4>
        <p className='my-5'>Let us be social</p>
        <FontAwesomeIcon icon={faFacebook}/>
        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon icon={faXTwitter}/>
        <FontAwesomeIcon icon={faLinkedin}/>
      </div>
    </div>
    <div className='bg-black p-3 text-center text-white'>
      <p>Copyright @ 2025 All rights</p>
    </div>
    </>
  )
}

export default Footer