import React from 'react'
import Image from 'next/image'
import heroImg from '../../public/images/info-background.png'
import { MovingBar } from '../MovingBar'
import { NavigationBar } from '../Navbar.js'

const Hero = () => {
    return (
                                     
        <div className='pt-[66px] absolute top-0 z-[-10]'>
            <MovingBar/> 
            <div className='relative flex justify-center'>
                <img 
                src="/images/info-background.png"                                    
                />
                <div className="container mx-auto md:w-3/5 absolute transform -translate-y-2/4 top-2/4">
                    <h1 className='text-center mb-4'>Hospital Ashford, comprometidos con tu calidad de vida</h1>
                    <p className='text-white text-center font-medium'>Por 118 años hemos operado de forma continua con los principios de nuestros fundadores como norte: Salud preventiva, vocación al servicio, innovación y trato con calor humano.</p>
                </div>
            </div>                
            
        </div>
                
    )
}

export {Hero}