import React from 'react'
import data from './data.json'

const Team = () => {
  return (
    <div className='container mx-auto'>
       <h5 className="mb-4">equipo</h5>
       <h1 className='text-darkGray'>Creemos en la vocación al servicio, la honradez, la responsabilidad y el trato con calor humano, como los valores fundamentales de nuestros profesionales de la salud.</h1>
        <div className='md:flex'>
            <div className='w-full md:w-1/4'>
                <h2 className='text-darkGray'>Gabinete ejecutivo</h2>
            </div>
            <div className='w-full md:w-3/4'>
                <div className='flex flex-wrap items-stretch'>
                {
                    React.Children.toArray(
                        data.map(item => (                            
                            <div className='w-1/3'>
                                <div className='m-4 rounded-sm'>
                                    <div className='bg-white p-3'>
                                        <p className='text-xs text-lightGray'>{item.role}</p>
                                        <p className='text-darkGray'>{item.name}</p>
                                        <p className='text-xs text-primary'>{item.email}</p>
                                    </div>
                                    <img src={item.img} alt="" /> 
                                </div>                                                                   
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

export {Team}