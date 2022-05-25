import React from 'react'

const EmergenciaPediatrica = () => {
  return (
    <div className='w-full flex'>
      <div class="w-full md:w-3/5">
        <h5 className="mb-4">sala de emergencia</h5>
        <h1 className='text-secondary'>Sala de emergencias pediátrica</h1>        
        <p className='text-darkGray'>El Ashford fue el primer hospital en Puerto Rico que tiene sala de emergencia para niños disponible las 24 horas del día con el mejor equipo de pediatría y enfermería y el apoyo humano que necesitan los padres en momentos inesperados.</p>
        <div>
          <ul>
            <li className='text-darkGray'>6 camas de observación y tratamiento para cualquier tipo de enfermedad aguda</li>
            <li className='text-darkGray'>Pediatras, consultores pediátricos y sub-especialistas con vasta experiencia</li>
            <li className='text-darkGray'>Enfermeras auxiliares y graduadas</li>
          </ul>
        </div>
      </div>
      <div className='w-full md:w-2/5'>
        <img 
        src="/images/eme3.png"                    
        /> 
      </div>           
    </div>
  )
}

export {EmergenciaPediatrica}