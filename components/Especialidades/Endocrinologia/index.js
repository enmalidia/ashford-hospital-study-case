import React from 'react'
import { FiArrowRight, FiPhone, FiClock } from "react-icons/fi";
import { BsGeo } from "react-icons/bs";
import data from './data.json'

const Endocrinologia = () => {
  return (
    <div className='container mx-auto'>
      <h5>especialidad</h5>
      <h1 className='text-darkGray'>Endocrinología</h1>
      <div className='md:flex'>
        <div className='w-full md:w-2/4'>
          <p>El centro endocrinológico cuenta con tecnología innovadora, personal de vasta experiencia y un grupo de médicos especializados en endocrinología. Atendemos condiciones como hipotiroidismo, hipertiroidismo, páncreas endocrino, diabetes, entre otros.</p>
        </div>
        <div className='w-full md:w-2/4'>         
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

export {Endocrinologia}