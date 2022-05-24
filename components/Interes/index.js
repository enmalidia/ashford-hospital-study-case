import React from 'react'
import Image from 'next/image'
import { Blocks, MemberContainer, MemberOverlay } from "./styles";
import data from './data.json'

const DatosInteres = () => {
  return (
    <>
    <div className="mx-auto w-full py-12 px-28 bg-secondary flex flex-wrap">
        <div className="w-full md:w-1/2 pr-12">
          <img
            className="object-cover object-left-top h-full rounded-md"
            src="/images/interest.png"  
            alt="Datos de interés"                             
          />
        </div>
        <div className='w-full md:w-1/2'>
            <h5 className="mb-4">datos de interés</h5>
            <h1 className='my-[18px]'>¡En el Hospital Ashford estamos para servirles!</h1>
            <h3 className="text-primary mb-12">Nuestra misión es proveer servicios médicos hospitalarios de excelencia con calor humano con empatía y compasión</h3>
              <Blocks>
                <div className='flex flex-col'>
                    <h1>118</h1>
                    <h4 className="text-white">Años de servicio a la comunidad</h4>
                </div>
                <div className='flex flex-col'>
                    <h1>300</h1>
                    <h4 className="text-white">Vidas de bebés salvadas al año en nuestro NICU Nivel 3</h4>
                </div>
                <div className='flex flex-col'>
                    <h1>#1</h1>
                    <h4 className="text-white">La clínica colorrectal más completa de Puerto Rico</h4>
                </div>
                <div className='flex flex-col'>
                    <h1>#1</h1>
                    <h4 className="text-white">#1 en partos en Hospital Privado en Puerto Rico</h4>
                </div>
              </Blocks>
        </div>        
    </div>
    <MemberContainer>
      {
        React.Children.toArray(
          data.map(item => (                        
              <div className='flex flex-col w-full md:w-1/4 relative m-3'>
                <img 
                src={item.img}
                className=" rounded-lg"               
                />
                <MemberOverlay />
                <div className="absolute bottom-0 py-10 px-6">
                  <h2 className='text-white'>{item.name}</h2>
                  <h6 className="text-white">{item.role}</h6>
                </div>                
              </div>                        
          ))
        )
      }
    </MemberContainer>
    </>
  )
}

export {DatosInteres}