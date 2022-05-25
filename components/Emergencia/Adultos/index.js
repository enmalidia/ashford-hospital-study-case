import React from 'react'
import Image from 'next/image'
import adultImg from '../../../public/images/eme2.png'

const EmergenciaAdultos = () => {
  return (
    <div className='w-full relative'>      
      <img 
      src="/images/eme2.png"                    
      />
      <div className='container grid grid-cols-6 gap-4 absolute  transform top-2/4 -translate-y-2/4'>  
        <div class="col-start-4 col-end-7 bg-white rounded-md p-20">
          <h5 className="mb-4">sala de emergencia</h5>
          <h1 className='text-secondary'>Sala de emergencias de adultos</h1>
          <p className='text-primary'>En nuestra sala de emergencia te ofrecemos un diagnóstico preciso con calor humano</p>
          <p className='text-darkGray'>En la Sala de Emergencias del Hospital Ashford brindamos servicios de emergencia con cómodas salas de espera, cirugía, rayos x, cuidado intensivo, admisión intermedia, registro y primeros auxilios.</p>
          <div>
            <ul>
              <li>Servicio de emergenciólogos</li>
              <li>Agilidad en prestación de servicios</li>
              <li>Unidades especializadas en dolor</li>
            </ul>
          </div>
        </div>      
      </div>     
    </div>
  )
}

export {EmergenciaAdultos}