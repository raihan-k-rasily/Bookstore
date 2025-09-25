import React from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <>
      <Header />

      <div className='md:px-40 p-5'>
        <div className="text-center my-5">
          <h1 className="text-3xl font-bold mb-5">CONTACTS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellat commodi optio, laudantium magnam accusamus, est asperiores in earum dolore ut rerum ullam architecto doloremque exercitationem nisi fugit iusto! Autem.
            Esse illo sequi magni nesciunt, minima dolorum, ullam debitis facilis tenetur voluptatem quod? Tenetur ratione asperiores fugiat molestias! Magni labore eos nihil rerum dignissimos necessitatibus adipisci dicta, reprehenderit aliquid nostrum.</p>
        </div>
        <div className="md:flex justify-evenly items-center my-10">
          <div className="flex items-center w-75 md:mt-0 mt-5">
            <div style={{width:'50px', height:'50px',borderRadius:'50%' }} className="border bg-gray-500 flex justify-evenly items-center me-5">
              <FontAwesomeIcon icon={faLocationDot}/>
            </div>
            <p>
              123 main Street, Apt48,
              Anytomn, CA 912334
            </p>
          </div><div className="flex items-center ">
            <div style={{width:'50px', height:'50px',borderRadius:'50%' }} className="border bg-gray-500 flex justify-evenly items-center me-5">
              <FontAwesomeIcon icon={faPhone}/>
            </div>
            <p>
              +91 9884494994
            </p>
          </div><div className="flex items-center ">
            <div style={{width:'50px', height:'50px',borderRadius:'50%' }} className="border bg-gray-500 flex justify-evenly items-center me-5">
              <FontAwesomeIcon icon={faPaperPlane}/>
            </div>
            <p>
              bookStore@gmail.com
            </p>
          </div>  
        </div>
        <div className="md:grid grid-cols-2 gap-10 md:px-30">
          <div className="bg-gray-300 p-2">
            <h1 className="text-xl text-center">Send me a Message</h1>
            <div className="my-3">
              <input type="text" placeholder=' Name' className="bg-white text-black placeholder-gray-500 w-full p-2 rounded" />
            </div>
            <div className="my-3">
              <input type="text" placeholder=' E-Mail' className="bg-white text-black placeholder-gray-500 w-full p-2 rounded" />
            </div>
            <div className="my-3">
              <textarea name="Message" placeholder='Message'  className="bg-white text-black placeholder-gray-500 w-full p-2 rounded" id="" rows={5}></textarea>
            </div>
            
            <div className="my-3">
              <button className='bg-black  w-full text-white p-2'>Send <FontAwesomeIcon icon={faPaperPlane}/></button>
            </div>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81155.25264303626!2d2.2646335984437354!3d48.85882554207292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e1!3m2!1sen!2sin!4v1758774309332!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact