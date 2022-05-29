import React from 'react'
import { FiPhone, FiClock } from "react-icons/fi";
import { BsGeo } from "react-icons/bs";

const Farmacia = () => {
  return (
    <div className='container mx-auto'>
      <h5>servicios</h5>
      <h1 className='text-darkGray'>Farmacia de la comunidad</h1>    
      <div className='w-full md:w-2/4'>
        <p>La farmacia del Hospital Ashford está localizada dentro del hospital y cuenta con un recetario amplio y especializado. Nuestro personal profesional y farmacéuticos debidamente licenciados tienen vasta experiencia y conocimiento para brindarle la orientación necesaria para complementar el cuidado de su salud.</p>
      </div>   
      <p className='text-primary'>Información, ubicación y horarios</p> 
      <div className='flex'>
        <div className='flex'>
          <FiPhone className='text-primary mr-2'/>
          <p className='text-xs'>Información: (787) 721-2160, ext. 1108</p>
        </div>
        <div className='flex'>
          <FiPhone className='text-primary mr-2'/>
          <p className='text-xs'>Fax: (787) 722-3738</p>
        </div>
        <div className='flex'>
          <BsGeo className='text-primary mr-2'/>
          <p className='text-xs'>Primer piso, cerca de la sala de emergencias.</p>
        </div>          
      </div> 
      <div className='flex'>
        <FiClock className='text-primary mr-2'/>
        <p className='text-xs'>Lunes a miércoles: 7:30 am – 5:00 pm, jueves y viernes: 8:00 am – 5:00 pm, sábado y domingo: 8:00 am – 12:00pm pm</p>
      </div>                
    </div>
  )
}

export {Farmacia}