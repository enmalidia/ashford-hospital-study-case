import React from 'react'
import { FaFacebookF, FaLinkedin, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const SocialSharing = () => {
  return (
    <>
        <div className='bg-ligthGrayBackground rounded-full flex items-center justify-center w-[42px] h-[42px]'>
            <FaFacebookF className='text-secondary'/>
        </div>
        <div className='bg-ligthGrayBackground rounded-full flex items-center justify-center w-[42px] h-[42px]'>
            <FaLinkedin className='text-secondary'/>
        </div>
        <div className='bg-ligthGrayBackground rounded-full flex items-center justify-center w-[42px] h-[42px]'>
            <FaTwitter className='text-secondary'/>
        </div>
        <div className='bg-ligthGrayBackground rounded-full flex items-center justify-center w-[42px] h-[42px]'>
            <FaInstagramSquare className='text-secondary'/>
        </div>
    </>
  )
}

export {SocialSharing}