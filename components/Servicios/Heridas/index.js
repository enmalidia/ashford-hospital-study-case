import React from 'react'
import { FiArrowRight, FiPhone, FiClock } from "react-icons/fi";
import { BsGeo } from "react-icons/bs";
import data from './data.json'

const CuidadoHeridas = () => {
  return (
    <div className='container mx-auto'>
      <h5>servicios</h5>
      <h1 className='text-darkGray'>Cuidado de heridas</h1>
      <div className='md:flex'>
        <div className='w-full md:w-2/4'>
          <p>El cuidado y tratamiento de heridas es un proceso importante para evitar infecciones y otras complicaciones. Nuestro centro de cuidado de heridas brinda tratamiento ambulatorio, interdisciplinario y con protocolos clínicos establecidos y científicamente probados. Además, educamos a pacientes en cuanto al cuidado de heridas en el hogar y sobre la prevención de futuras heridas.</p>
        </div>
        <div className='w-full md:w-2/4'>
          <p>Entre los tipos de heridas que atendemos figuran:</p>
          {
            React.Children.toArray(
              data.map(item => ( 
                  <div className='flex'>
                    <FiArrowRight className='text-primary'/>
                    <p>{item.item}</p>                      
                  </div>                                                                                                 
              ))
            )
          }
        </div>
      </div>
        <p className='text-primary'>Información, ubicación y horarios</p> 
        <div className='flex'>
          <div className='flex'>
            <FiPhone className='text-primary mr-2'/>
            <p className='text-xs'>(787) 721-3277 / (787) 721-2160, ext. 6580 y 6582</p>
          </div>
          <div className='flex'>
            <BsGeo className='text-primary mr-2'/>
            <p className='text-xs'>Primer piso, edificio de administración (detrás de la sala de emergencias)</p>
          </div>
          <div className='flex'>
            <FiClock className='text-primary mr-2'/>
            <p className='text-xs'>Lunes a viernes de 7:00am - 4:00pm</p>
          </div>
        </div>       
    </div>
  )
}

export {CuidadoHeridas}