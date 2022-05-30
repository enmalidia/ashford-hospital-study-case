import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import data from "./data.json"

const Ortopedia = () => {
  return (
    <div className='w-full relative'>      
      <img 
      src="/images/especialties/spe4.png"                    
      />
      <div className='container grid grid-cols-12 gap-4 absolute  transform top-2/4 -translate-y-2/4'>  
        <div class="col-start-2 col-end-9 bg-white rounded-md p-20">
          <h5 className="mb-4">especialidad</h5>
          <h1 className='text-secondary'>Ortopedia</h1>         
          <p className='text-darkGray'>El equipo de ortopedia del Hospital Ashford es el más completo y preparado para tratar condiciones musculoesqueletales. Nuestra Facultad de Ortopedia está enfocada en proveer servicios personalizados para lograr resultados óptimos en cada caso. Ofrecemos servicios integrados desde el diagnósticos con evaluación y pruebas, servicios de Centro de Imágenes y radiología y un centro completo de terapia física y rehabilitación. En el Hospital Ashford contamos con cirujanos ortopedas capacitados para todas las subespecialidades en este campo. Nuestro equipo de expertos en cirugía ortopédica utiliza las últimas técnicas y tecnologías para asistirle durante el proceso de diagnóstico, cirugía y recuperación.</p>
          <div className='flex flex-wrap'>
            {
              React.Children.toArray(
                data.map(item => ( 
                    <div className='flex w-1/2'>
                      <FiArrowRight className='text-primary'/>
                      <p>{item.item}</p>                      
                    </div>                                                                                                 
                ))
              )
            }
          </div>
        </div>      
      </div>     
    </div>
  )
}

export {Ortopedia}