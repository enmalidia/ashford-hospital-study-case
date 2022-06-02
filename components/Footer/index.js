import React from 'react'
import { LogoWhiteSVG } from "./LogoWhiteSVG"
import { FiArrowRight } from "react-icons/fi";
import row1 from './row1.json'
import row2 from './row2.json'
import data from './para_pac.json'
import { SocialSharing } from '../Social'
import { BorderColumn } from './styles'
 

const Footer = () => {  

  return (
    <div className="w-full bg-secondary">
      <div className='px-4 pt-10 md:px-14 md:pt-16 lg:px-28 mx-auto md:flex md:flex-wrap lg:flex-nowrap md:justify-between'>
        <div className="w-full md:w-2/4 xl:w-1/4 lg:mr-8">
            <LogoWhiteSVG />
            <p className='text-white leading-none mt-10'>Ashford Hospital</p>
            <p className='text-xs text-white flex flex-col'>
              <span>451 Ave Dr Ashford,</span>
              <span>00907, San Juan, Puerto Rico</span>
            </p>
            <div className='mt-14'>
              <a href="">
                <div className='flex text-white items-center'>                
                  <p className='text-primary'>Contacto</p>
                  <FiArrowRight className='text-primary' />
                </div>
              </a>
              <a href="">
                <div className='flex text-white items-center'>                
                  <p className='text-primary'>Sobre nosotros</p>
                  <FiArrowRight className='text-primary' />
                </div>
              </a>
              <a href="">
                <div className='flex text-white items-center'>                
                  <p className='text-primary'>Equipo</p>
                  <FiArrowRight className='text-primary' />
                </div>
              </a>
            </div>           
            <div className='flex mt-8'>
              <SocialSharing />              
            </div>
          </div>
          <BorderColumn className="w-full md:w-2/4 my-8 lg:my-0 md:pl-8">
            <p className='text-primary mb-[10px]'>Servicios y especialidades</p>
            <div className='w-full md:flex'>
              <ul className='mr-8'>
              {
                React.Children.toArray(
                  row1.map(item => (                        
                    <li className='text-white mt-2'><a href=""><h6 className='text-white hover:text-primary'>{item.name}</h6></a></li>                   
                  ))
                )               
              }  
              </ul>
              <ul>
              {
                React.Children.toArray(
                  row2.map(item => (                        
                    <li className='text-white mt-2'><a href=""><h6 className='text-white hover:text-primary'>{item.name}</h6></a></li>                   
                  ))
                )               
              }  
              </ul>              
            </div>                       
          </BorderColumn>
          <BorderColumn className="w-full md:w-2/4 xl:w-1/4 md:pl-8 my-8 lg:my-0">
            <p className='text-primary mb-[10px]'>Para pacientes</p>
              <div>
                <ul>
                  {
                  React.Children.toArray(
                    data.map(item => (                        
                      <li className='text-white mt-2'><a href=""><h6 className='text-white hover:text-primary'>{item.name}</h6></a></li>                   
                    ))
                  )               
                  } 
                </ul>
              </div>
          </BorderColumn>
      </div>  
      <div className='flex flex-col-reverse lg:flex-row justify-between px-4 py-6 md:px-14 md:pt-10 md:pb-6 xl:px-28 xl:pt-14 mx-auto'>
        <p className='text-xs text-white mt-6 lg:mt-0'>Copyright © 2022. Ashford Hospital</p>
        <div className='flex flex-col lg:flex-row justify-between'>
          <a href="">
            <p className='text-xs text-white underline mr-8'>Lista comprensiva de cargos del Hospital Ashford</p>
          </a>
          <a href="">
            <p className='text-xs text-white underline mr-8'>Política de privacidad</p>
          </a>
          <a href="">
            <p className='text-xs text-white underline'>Política de conflictos de interés</p>
          </a>
        </div>
      </div>     
    </div>
  )
}

export {Footer}