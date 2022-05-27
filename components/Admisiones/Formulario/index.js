import React from 'react'

const FormAdmision = () => {
  return (
    <div className='mx-auto md:flex'>
        <div className='w-full md:w-1/2'>
            <img src="/images/adm2.jpg" alt="" /> 
        </div>
        <div className='w-full md:w-1/2'>
            <h5 className="mb-4">ashford card</h5>
            <h1 className='text-darkGray'>Formulario de admisión</h1>
            <p className='text-primary'>La tarjeta Ashford Card está diseñada para agilizar el servicio al paciente que nos visita.</p>
            <p className='text-darkGray'>La tarjeta es completamente gratis, y al solicitarla mantenemos su información básica en nuestros archivos de forma que cuando requiera servicios con solamente mostrar su tarjeta, podemos registrar de inmediato. Para solicitar la Ashford Card, llene la siguiente solicitud:</p>
        </div>
    </div>
  )
}

export {FormAdmision}