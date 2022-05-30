import React from 'react'

const Obstetricia = () => {
  return (
    <div className='mx-auto md:flex'>      
      <div className='w-full md:w-7/12'>
        <h5>especialidad</h5>
        <h1 className='text-darkGray'>Pediatría</h1>
        <p className='text-primary'>Cuidamos por la salud de la mujer en todo momento</p>
        <p>En el Hospital Ashford nos encantan los niños y tenemos el Departamento de Pediatría con el más avanzado equipo técnico y el respaldo del mejor equipo de pediatras en toda la Isla. Nuestro compromiso con las familias es proveer respuestas y tratamientos que les provean paz mental para que sus niños siempre estén saludables y felices. El Ashford también cuenta con una amplia sala de emergencias pediátricas para ofrecerte un servicio de calidad y excelencia.</p>
      </div>
      <div className='w-full md:w-5/12'>
        <img src="/images/especialties/spe1.png" alt="" />
      </div>
    </div>
  )
}

export {Obstetricia}