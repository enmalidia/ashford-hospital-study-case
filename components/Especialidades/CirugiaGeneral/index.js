import React from 'react'

const CirugiaGeneral = () => {
  return (
    <div className='w-full relative'>      
      <img 
      src="/images/especialties/spe8.png"                    
      />
      <div className='container grid grid-cols-12 gap-4 absolute  transform top-2/4 -translate-y-2/4'>  
        <div class="col-start-2 col-end-9 bg-white rounded-md p-20">
          <h5 className="mb-4">especialidad</h5>
          <h1 className='text-secondary'>Cirugía general</h1>         
          <p className='text-darkGray'>Experiencia, innovación y reputación son algunas de las características que definen nuestra Facultad Médica de Cirugía. Tenemos un equipo de cirugías de primera, con vasta experiencia para proveer soluciones y alternativas para mejorar su calidad de vida y su salud. Nuestras salas quirúrgicas operan las 24 horas y 365 días del año. Nuestro personal de enfermería es altamente cualificado y competente para ofrecer siempre el mejor servicio.</p>
        </div>      
      </div>     
    </div>
  )
}

export {CirugiaGeneral}