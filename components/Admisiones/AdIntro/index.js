import React from 'react'
import { FiClock, FiPhone } from 'react-icons/fi';

const AdIntro = () => {
  return (
    <div className='md:flex'>
        <div className='w-full md:w-1/2'>
            <h5 className="mb-4">para pacientes</h5>
            <h1 className='text-darkGray'>Admisiones y pre-admisiones</h1>
            <p className='text-primary'>El Centro de registro del Hospital Ashford está diseñado para facilitar el proceso de admisiones de una forma eficiente y en un solo lugar.</p>
            <p className='text-darkGray'>Integramos las citas para servicios de radiografías, laboratorios, consulta médica, pre admisión, admisión y pagos en un solo dia.</p>
            <p className='text-primary'>Horarios y teléfonos</p>
            <div className='flex'>
                <FiClock className='text-primary mr-2'/>
                <p className='text-darkGray text-sm'>7:00am-6:00pm</p>
            </div>
            <div className='flex'>
                <FiPhone className='text-primary mr-2'/>
                <p className='text-darkGray text-sm'>(787) 721-2160, ext. 6542, 6548, 6549, 1001 y 1003</p>
            </div>
            <p className='text-darkGray text-xs'>*El paciente puede hacer cita para pre-admisión llamando al (787) 417-7410 o personalmente en el área de admisiones del Hospital</p>
        </div>
        <div className='w-full md:w-1/2'>
            <img src="/images/adm1.png" alt="" />
        </div>
    </div>
  )
}

export {AdIntro}