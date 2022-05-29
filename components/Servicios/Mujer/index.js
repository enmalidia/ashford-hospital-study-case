import React from 'react'
import { FiArrowRight, FiPhone, FiClock } from "react-icons/fi";
import { BsGeo } from "react-icons/bs";
import data from './data.json'

const CentroMujer = () => {
  return (
    <div className='container mx-auto'>
      <h5>servicios</h5>
      <h1 className='text-darkGray'>Centro de la mujer</h1>
      <div className='md:flex'>
        <div className='w-full md:w-2/4'>
          <p>El centro de la mujer del Hospital Ashford se enfoca en fomentar el desarrollo físico, mental y social de nuestras visitantes. Ofrecemos servicios integrales de salud y promovemos la detección temprana de las condiciones más comunes en mujeres como cáncer de seno, enfermedades cardiovasculares, virus del papiloma humano, menopausia, salud del cuello uterino, entre otros. Con una llamada, nuestra educadora en salud coordinará todos sus estudios especializados.</p>
        </div>
        <div className='w-full md:w-2/4'>         
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
            <p className='text-xs'>(787) 721-2298</p>
          </div>
          <div className='flex'>
            <BsGeo className='text-primary mr-2'/>
            <p className='text-xs'>Primer piso (al lado de sonografía)</p>
          </div>
          <div className='flex'>
            <FiClock className='text-primary mr-2'/>
            <p className='text-xs'>Lunes a viernes, 7:00am - 4:00pm</p>
          </div>
        </div>                 
    </div>
  )
}

export {CentroMujer}