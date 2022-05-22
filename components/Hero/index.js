import React from 'react'
import Image from 'next/image'
import heroImg from '../../public/images/info-background.png'
import { MenuBar } from '../MenuBar'
import { MovingBar } from '../MovingBar'

const Hero = () => {
    return (
        <div>
            <MenuBar/>
            <MovingBar/>
            <div>
                <Image 
                src={heroImg}
                layout="fill"
                objectFit="cover"
                />
            </div>
        </div>        
    )
}

export {Hero}