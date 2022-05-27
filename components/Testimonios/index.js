import React from 'react'

const Testimonials = () => {
  return (
    <div className='mx-auto md:flex'>
        <div className='w-full md:w-2/5 bg-primary'>
            <h5 className='text-secondary'>historias de ashford</h5>
            <h2 className='text-white italic'> “Trabajamos para recibir la aprobación y agradecimiento de nuestros pacientes en cada interación.”</h2>
            <div className='flex py-8'>
                <img src="/images/eje11.png" alt="" />
                <div className=''>
                    <p className='text-secondary'>Lcda. Itza Soto</p>
                    <p className='text-xs text-white'>Directora Ejecutiva</p>
                </div>                
            </div>
        </div>
        <div className='w-full md:w-3/5 bg-lightGray'>

        </div>
    </div>
  )
}

export {Testimonials}