import React from 'react'
import { FiArrowRight, FiPhone, FiClock } from "react-icons/fi";
import data from './data.json'

const Prenatal = () => {
  return (
    <div className='mx-auto md:flex'>
      <div className='w-2/5'>
        <img src="/images/services/serv6.png" alt="" />
      </div>
      <div className='w-3/5 bg-blueBackground'>
        <h5>servicios</h5>
        <h1 className='text-white'>Centro prenatal</h1>
        <p className='text-white'>En nuestro centro prenatal trabajamos de la mano con tu obstetra para personalizar el plan de tratamiento óptimo para tus necesidades. Realizamos estudios y procedimientos especializados para atender condiciones en etapas tempranas. Nuestro objetivo es que tu embarazo sea seguro para ti y tu bebé.</p>
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
        <p className='text-primary'>Información</p>     
        <div className='flex'>
          <FiPhone className='text-primary mr-2'/>
          <p className='text-xs text-white'>(787) 474-4800</p>
        </div>      
      </div>
    </div>
  )
}

export {Prenatal}