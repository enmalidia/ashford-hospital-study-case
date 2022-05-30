import React from 'react'
import { FiArrowRight, FiPhone, FiClock } from "react-icons/fi";
import { BsGeo } from "react-icons/bs";

const CuidadoNeonatal = () => {
  return (
    <div className='mx-auto md:flex bg-blueBackground pt-28'>
      <div className='w-2/4 rounded-sm'>
        <img src="/images/especialties/spe2.png" alt="" />
      </div>     
      <div className='w-2/4 py-14 px-28'>
        <h5>especialidad</h5>
        <h1 className='text-white'>Unidad de cuidado intensivo neonatal</h1>
        <p className='text-primary'>El cuidado de un recién nacido prematuro requiere atención personalizada y protocolos rigurosos para asegurar el desarrollo saludable de cada bebe.</p>
        <p className='text-white'>La unidad de cuidado intensivo neonatal del Hospital Ashford fue creada específicamente para atender las necesidades médicas de los recién nacidos prematuros con servicios altamente especializados y neonatologos que proveen sus servicios las 24 horas del día. Somos el único hospital privado en el área metropolitana que tiene una unidad NICU nivel 3</p>
        <p className='text-primary'>Información, ubicación y horarios</p>     
        <div className='flex'>
          <FiClock className='text-primary mr-2'/>
          <div className='flex flex-col'>
            <p className='text-xs text-white'>Todos los días de 11:30am - 2:00pm y de 4:00pm - 8:00pm</p>         
          </div>         
        </div> 
        <div className='flex'>
          <FiPhone className='text-primary mr-2'/>
          <p className='text-xs text-white'>(787) 721-2160, ext. 3411</p>
        </div>                    
      </div>      
    </div>
  )
}

export {CuidadoNeonatal}