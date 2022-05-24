import React from 'react'
import {EspecialtyBlock, EspecialtyContainer} from "./styles"
import data from "./espec.json"

const Especialidades = () => {
  return (
    <div className="container md:mx-auto flex flex-wrap justify-center">
      <h2 className='text-secondary text-center'>Especialidades</h2>
      <div className='flex flex-wrap justify-center pt-12'>
          {
            React.Children.toArray(
              data.map(item => ( 
                <EspecialtyContainer>                  
                  <EspecialtyBlock>
                  <p className="text-white">{item.title}</p>
                  </EspecialtyBlock>                                    
                  <h6 className="text-secondary my-[14px] text-center">{item.name}</h6>
                </EspecialtyContainer>                                  
              ))
            )
          }
          
      </div>
    </div>
  )
}

export {Especialidades}