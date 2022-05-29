import React from 'react'
import { FiPhone, FiClock } from "react-icons/fi";
import { BsGeo } from "react-icons/bs";

const Vacunacion = () => {
  return (
    <div className='w-full relative'>      
      <img 
      src="/images/services/serv8.png"                    
      />
      <div className='container grid grid-cols-6 gap-4 absolute  transform top-2/4 -translate-y-2/4'>  
        <div class="col-start-4 col-end-7 bg-white rounded-md p-20">
          <h5 className="mb-4">servicios</h5>
          <h1 className='text-secondary'>Centro de vacunación</h1>  
          <p className='text-primary'>Manténgase al día con toda información sobre vacunas para el Covid-19</p>       
          <p className='text-darkGray'>En el Hospital Ashford ofrecemos servicios para todo tipo de vacuna. Las vacunas son un mecanismo eficiente para el control de muchas enfermedades y es nuestro deber como ciudadanos responsabilizarnos por proteger nuestra salud y la del prójimo.</p>
          <p className='text-primary'>Información, ubicación y horarios</p>
          <div className='flex'>
            <FiPhone className='text-primary mr-2'/>
            <p className='text-xs'>(787) 721-2160 ext. 6525</p>
          </div>
          <div className='flex'>
            <FiClock className='text-primary mr-2'/>
            <p className='text-xs'>Lunes - viernes 8:30am - 4:30pm (12 años en adelante) - sin cita</p>
          </div>
          <div className='flex'>
            <BsGeo className='text-primary mr-2'/>
            <p className='text-xs'>covid@ashfordhospital.com</p>
          </div>          
        </div>      
      </div>     
    </div>
  )
}

export {Vacunacion}