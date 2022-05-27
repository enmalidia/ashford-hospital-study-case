import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { IoDownloadOutline } from "react-icons/io5";
import data from './data.json'

const Requirements = () => {
  return (
    <div className='mx-auto md:flex'>
        <div className='w-full md:w-1/2'>
            <p className='text-primary'>Requisitos para el paciente</p>
            {
                React.Children.toArray(
                    data.map(item => (                            
                        <div className='flex mb-3'>
                            <FiArrowRight className='text-primary mr-2'/>
                            <p>{item.item}</p>
                        </div>                                                                 
                    ))
                )
            }
            <p className='text-xs'>*Todo aquel paciente que su plan médico requiera autorización, referido o llamada al plan médico, debe ser gestionada con la oficina de su cirujano o ginecólogo antes de su cita de pre-admisión</p>
            <p className='text-xs'>*De usted no cumplir con alguno de estos requisitos NO podrá realizar la pre-admisión</p>
        </div>
        <div className='w-full md:w-1/2'>
            <div className='flex'>
                <IoDownloadOutline className='text-primary mr-2'/>
                <p className='text-primary'>Descargar formularios</p>
            </div>
        </div>
    </div>
  )
}

export {Requirements}