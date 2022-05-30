import React from 'react'
import { FiArrowRight, FiPhone, FiClock } from "react-icons/fi";
import { BsGeo } from "react-icons/bs";
import data from './data.json'

const MedicinaDeportiva = () => {
  return (
    <div className='container mx-auto'>
      <h5>especialidad</h5>
      <h1 className='text-darkGray'>Medicina deportiva</h1>
      <div className='md:flex'>
        <div className='w-full md:w-2/4'>
          <p>La medicina deportiva es la especialidad médica que estudia los efectos del ejercicio, deporte y la actividad física en el cuerpo humano. Nuestro equipo se encarga de preparar y optimizar la condición del cuerpo a través del cuidado, asesoramiento, diagnóstico y tratamiento necesario para practicar deportes de forma segura.</p>
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
      <p className='text-primary'>Información, ubicación y horarios</p> 
      <div className='flex'>
        <div className='flex'>
          <FiPhone className='text-primary mr-2'/>
          <p className='text-xs'>(787) 722-2915 o al 721-2160, ext. 1022 ó 1021</p>
        </div>        
      </div>                 
    </div>
  )
}

export {MedicinaDeportiva}