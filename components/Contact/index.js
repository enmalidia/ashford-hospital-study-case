import React from 'react'
import { SocialSharing } from '../Social'

const Contact = () => {
  return (
    <div className='container mx-auto w-full md:flex'>
        <div className='w-full md:w-1/2 bg-gray-400'>

        </div>
        <div className='w-full md:w-1/2'>
            <div>
                <p className='text-primary'>Información, ubicación y horarios</p>
                <p className='text-darkGray text-sm'>d, San Juan, 00907, Puerto Rico</p>
                <p className='text-darkGray text-sm'>+1 787-721-2160</p>
                <p className='text-darkGray text-sm'>Compliance Hotline: +1 787-721-2163</p>
                <p className='text-darkGray text-sm'>info@ashford.com</p>
                <p className='text-darkGray text-sm'>De lunes a viernes de 9:00am a 5:00pmm</p> 
            </div>
            <div>
                <p className='text-primary'>Redes sociales</p>
                <div className='flex justify-between w-60'>
                    <SocialSharing />
                </div>                
            </div>
            
        </div>
    </div>
  )
}

export {Contact}