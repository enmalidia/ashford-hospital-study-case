import React from 'react'
import Image from 'next/image'
import { ContentWrapper } from "../../styles/global";
import heroImg from '../../public/images/info-background.png'
import { MenuBar } from '../MenuBar'
import { MovingBar } from '../MovingBar'

const Hero = () => {
    return (
        <div className=''>
            <MenuBar/>
            <MovingBar/>
            <div className='h-full'>
                <Image 
                src={heroImg}
                layout="fill"
                objectFit="cover"
                />
                <div className="container mx-auto md:w-3/5 relative -top-2/4 transform translate-y-2/4">
                    <h1 className='text-center mb-4'>Hospital Ashford, comprometidos con tu calidad de vida</h1>
                    <p className='text-white text-center font-medium'>Por 118 años hemos operado de forma continua con los principios de nuestros fundadores como norte: Salud preventiva, vocación al servicio, innovación y trato con calor humano.</p>
                </div>
            </div>
        </div>        
    )
}

export {Hero}