import React from 'react'
import { FaFacebookF, FaLinkedin, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const SocialSharing = () => {
  return (
    <>
        <div className='bg-ligthGrayBackground rounded-full flex items-center justify-center w-[42px] h-[42px] mr-4'>
            <FaFacebookF className='text-mediumBlue w-5 h-5'/>
        </div>
        <div className='bg-ligthGrayBackground rounded-full flex items-center justify-center w-[42px] h-[42px] mr-4'>
            <FaLinkedin className='text-mediumBlue w-5 h-5'/>
        </div>
        <div className='bg-ligthGrayBackground rounded-full flex items-center justify-center w-[42px] h-[42px] mr-4'>
            <FaTwitter className='text-mediumBlue w-5 h-5'/>
        </div>
        <div className='bg-ligthGrayBackground rounded-full flex items-center justify-center w-[42px] h-[42px] mr-4'>
            <FaInstagramSquare className='text-mediumBlue w-5 h-5'/>
        </div>
    </>
  )
}

export {SocialSharing}