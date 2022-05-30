import React from 'react'
import { FiArrowRight, FiPhone, FiClock } from "react-icons/fi";

const Pediatria = () => {
  return (
    <div className='mx-auto md:flex'>      
      <div className='w-full md:w-7/12 bg-grayBackground'>
        <h5>especialidad</h5>
        <h1 className='text-darkGray'>Pediatría</h1>        
        <p>En el Hospital Ashford nos encantan los niños y tenemos el Departamento de Pediatría con el más avanzado equipo técnico y el respaldo del mejor equipo de pediatras en toda la Isla. Nuestro compromiso con las familias es proveer respuestas y tratamientos que les provean paz mental para que sus niños siempre estén saludables y felices. El Ashford también cuenta con una amplia sala de emergencias pediátricas para ofrecerte un servicio de calidad y excelencia.</p>
        <p className='text-primary'>Información, ubicación y horarios</p> 
        <div className='flex'>
          <div className='flex'>
            <FiPhone className='text-primary mr-2'/>
            <p className='text-xs'>(787) 721-2160, ext. 2103 o 2104</p>
          </div>        
        </div> 
      </div>
      <div className='w-full md:w-5/12'>
        <img src="/images/especialties/spe10.png" alt="" />
      </div>
    </div>
  )
}

export {Pediatria}