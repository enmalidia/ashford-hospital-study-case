import React from 'react'
import {GrayContainer} from '../../FAQs/styles'

const EmergenciaIntro = () => {
  return (
    <GrayContainer className='w-full'>
      <div className="container mx-auto w-full">
        <h5 className="mb-4">sala de emergencia</h5>
        <h1 className='text-secondary'>Nuestra sala de emergencia está abierta 24 horas al día, los 7 días de la semana</h1>
        <p className='text-primary'>Contamos con profesionales especializados en medicina de familia, medicina de emergencia, medicina interna, pediatría, enfermería y administración</p>
        <p className='text-darkGray'>El Ashford es el hospital de emergencia designado para el Aeropuerto Internacional Luis Muñoz Marín, Puertos de Cruceros de San Juan, Centro de Convenciones y hoteles en el área metropolitana de San Juan.</p>
        <p className='text-primary'>Información, ubicación y horarios:</p>
        <div className='flex'>
          <p className='text-darkGray text-sm'>(787) 721-2160, ext. 1095, 1096, 1097 y 1098</p>
          <p className='text-darkGray text-sm'>24 horas al día, los siete días de la semana</p>
        </div>
      </div>
    </GrayContainer>    
  )
}

export {EmergenciaIntro}