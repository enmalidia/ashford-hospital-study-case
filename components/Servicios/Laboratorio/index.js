import React from 'react'
import { FiPhone, FiClock } from "react-icons/fi";
import { BsGeo } from "react-icons/bs";

const Laboratorio = () => {
  return (
    <div className='w-full relative'>      
      <img 
      src="/images/services/serv3.png"                    
      />
      <div className='container grid grid-cols-6 gap-4 absolute  transform top-2/4 -translate-y-2/4'>  
        <div class="col-start-4 col-end-7 bg-white rounded-md p-20">
          <h5 className="mb-4">servicios</h5>
          <h1 className='text-secondary'>Laboratorio</h1>         
          <p className='text-darkGray'>El laboratorio clínico del Hospital Ashford es atendido por reconocidos patólogos que continuamente ofrecen consultas a los médicos de nuestros pacientes. Contamos con la tecnología avanzada para realizar toda la gama de pruebas de laboratorio y el análisis que nuestros pacientes necesitan para un diagnóstico preciso.</p>
          <p className='text-primary'>Información, ubicación y horarios</p>
          <div className='flex'>
            <FiPhone className='text-primary mr-2'/>
            <p className='text-xs'>(787) 721-2160 ext. 1001, 1003, 1036</p>
          </div>
          <div className='flex'>
            <BsGeo className='text-primary mr-2'/>
            <p className='text-xs'>Centro de registro, primer piso</p>
          </div>
          <div className='flex'>
            <FiClock className='text-primary mr-2'/>
            <p className='text-xs'>Lunes a viernes 6:00am - 5:00pm; sábado 7:00am - 12:00pm</p>
          </div>
        </div>      
      </div>     
    </div>
  )
}

export {Laboratorio}