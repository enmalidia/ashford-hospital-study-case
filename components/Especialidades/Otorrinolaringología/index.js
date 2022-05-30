import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import data from './data.json'

const Otorrinolaringologia = () => {
  return (
    <div className='mx-auto md:flex'>
    <div className='w-2/5'>
      <img src="/images/especialties/spe6.png" alt="" />
    </div>
    <div className='w-3/5 bg-blueBackground'>
      <h5>especialidad</h5>
      <h1 className='text-white'>Otorrinolaringología</h1>
      <p className='text-white'>En nuestra clínica integral de otorrinolaringología ofrecemos evaluación y manejo de las condiciones crónicas y quirúrgicas de pacientes con enfermedades del oído, nariz, garganta y estructuras relacionadas de la cabeza y del cuello. Ofrecemos servicios de otorrinolaringología general, otología y neurotología, cirugía de tiroides, paratiroides y adrenales, entre otros.</p>
      <div className='flex flex-wrap'>
      {
        React.Children.toArray(
          data.map(item => ( 
              <div className='flex w-1/2'>
                <FiArrowRight className='text-primary'/>
                <p className='text-white'>{item.item}</p>                      
              </div>                                                                                                 
          ))
        )
      }
      </div>          
    </div>
  </div>
  )
}

export {Otorrinolaringologia}