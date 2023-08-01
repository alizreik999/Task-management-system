
import React from 'react';
import {
    AiTwotonePhone,
    AiFillMail,
    AiOutlineEnvironment,
}from "react-icons/ai";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
    
  }from 'react-icons/fa';
const Contactus = () => {
    return ( 
        <div className="flex w-full min-h-screen justify-center items-center">
                <div className="flex flex-col space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
                    <div className='flex flex-col space-y-8 justify-between'>
                        <div>
                            <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
                            <p className='pt-2 text-cyan-100 text-sm'>Feel free to reach out to us using the contact information provided below.</p>
                        </div>
                        <div className='flex flex-col space-y-6'>
                            <div className='inline-flex space-x-2 items-center'>
                        <AiTwotonePhone  className='text-teal-300 text-xl'  size={25}/>
                        <span>+(961)3 936 759</span>

                        </div>
                        <div>
                            <div className='inline-flex space-x-2 items-center'>
                        <AiFillMail  className='text-teal-300 text-xl'  size={25}/>
                        <span>alizreik1810@gmail.com</span>

                        </div>
                        </div>
                        <div>
                            <div className='inline-flex space-x-2 items-center'>
                        <AiOutlineEnvironment  className='text-teal-300 text-xl'  size={25}/>
                        <span>Nabatieh, Lebanon</span>

                        </div>
                        </div>
                        <div className='flex  space-x-4 sm:w-[300px] pt-4  text-xl'>
                        <FaFacebook/>
          <FaGithub/>
          <FaInstagram/>
          <FaTwitch/>
          <FaTwitter/>

                            </div>
                        </div>
                       


                    </div>
                    <div className='bg-white rounded-xl shadow-lg p-8'>
                        <form action="" className='flex flex-col space-y-4'>
                            <div>
                                <label for="" className='text-sm' >Your name</label>

                            </div>
                            <div>
                                <input type='text' placeholder='Your name' className='ring-1 ring-gray-300 rounded-md w-full outline-none px-4 py-2' ></input>

                            </div>
                            <div>

                            </div>
                        </form>

                    </div>

                </div>
        </div>
     );
}
 
export default Contactus;