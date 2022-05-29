import React from 'react'

const Obstetricia = () => {
  return (
    <div className='mx-auto md:flex'>      
      <div className='w-full md:w-7/12'>
        <h5>especialidades</h5>
        <h1 className='text-darkGray'>Obstetricia, ginecología y ginecología oncológica</h1>
        <p className='text-primary'>Cuidamos por la salud de la mujer en todo momento</p>
        <p>Nuestra facultad médica está integrada por obstetras, ginecólogos, perinatólogos y ginecólogos oncólogos de vasta experiencia preparados para prevenir y tratar cualquier condición ginecológica. Nuestros obstetras y perinatólogos están preparados para atender partos, así como condiciones de alto riesgo en el embarazo. Anualmente, el Hospital Ashford es el hospital privado de Puerto Rico donde nacen más bebés y la primera institución hospitalaria en Puerto Rico que ha sido certificada como “Hospital Amigo del Niño.</p>
      </div>
      <div className='w-full md:w-5/12'>
        <img src="/images/especialties/spe1.png" alt="" />
      </div>
    </div>
  )
}

export {Obstetricia}