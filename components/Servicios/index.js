import React from 'react'
import data from "./serv.json"
import { EspecialtyCard } from "./styles"
import { FiArrowRightCircle } from 'react-icons/fi'


const Servicios = () => {
  return (
    <div className="container mx-auto justify-center py-16">
      <h2 className='text-secondary text-center'>Servicios</h2>
      <div className='flex flex-wrap justify-center pt-12'>
          {
            React.Children.toArray(
              data.map(item => ( 
                <EspecialtyCard>
                  <FiArrowRightCircle className="h-6 w-6 text-primary"/>
                  <p className="ml-6">{item.name}</p>
                </EspecialtyCard>                                
              ))
            )
          }
      </div>
    </div>
  )
}

export {Servicios}