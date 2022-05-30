import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import data from './data.json'

const Urologia = () => {
  return (
    <div className='container mx-auto'>
      <h5>especialidad</h5>
      <h1 className='text-darkGray'>Urología</h1>
      <div className='md:flex'>
        <div className='w-full md:w-2/4'>
          <p>Nuestros urólogos se encargan de la prevención, diagnóstico y tratamiento de enfermedades renales, del aparato urinario y reproductor que afectan a ambos sexos. El equipo médico de urología se enfoca en proveer a cada paciente una experiencia personalizada identificando condiciones y tratamientos para lograr resultados extraordinarios.</p>
        </div>
        <div className='w-full md:w-2/4'>  
          <p>Condiciones urológicas:</p>       
          {
            React.Children.toArray(
              data.map(item => ( 
                <div className='flex'>
                  <FiArrowRight className='text-primary'/>
                  <p>{item.item}</p>                      
                </div>                                                                                                 
              ))
            )
          }
        </div>
      </div>                   
    </div>
  )
}

export {Urologia}