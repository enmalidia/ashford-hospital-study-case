import React from 'react'
import { LogoWhiteSVG } from "./LogoWhiteSVG"
import { FiArrowRight } from "react-icons/fi";
import { FaFacebookF, FaLinkedin, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import row1 from './row1.json'
import row2 from './row2.json'
import data from './para_pac.json'
 

const Footer = () => {

  const getRow1 = () =>{
    let row1=[]
    for (let i = 0; i < data.length===10 ; i++) {    
        row1.push(data[i])
    }
    return row1  
  }  

  return (
    <div className="w-full bg-secondary">
      <div className='pt-16 px-28 mx-auto md:flex'>
        <div className="w-full md:w-1/4">
            <LogoWhiteSVG />
            <p className='text-white'>Ashford Hospital</p>
            <p>
              <span className='text-white'>451 Ave Dr Ashford,</span>
              <span className='text-white'>00907, San Juan, Puerto Rico</span>
            </p>
            <a href="">
              <div className='flex text-white items-center'>                
                <p>Contacto</p>
                <FiArrowRight/>
              </div>
            </a>
            <a href="">
              <div className='flex text-white items-center'>                
                <p>Sobre nosotros</p>
                <FiArrowRight/>
              </div>
            </a>
            <a href="">
              <div className='flex text-white items-center'>                
                <p>Equipo</p>
                <FiArrowRight/>
              </div>
            </a>
            <div className='flex justify-between'>
              <div className='bg-ligthGrayBackground rounded-full flex items-center justify-center w-[42px] h-[42px]'>
                <FaFacebookF className='text-secondary'/>
              </div>
              <div className='bg-ligthGrayBackground rounded-full flex items-center justify-center w-[42px] h-[42px]'>
                <FaLinkedin className='text-secondary'/>
              </div>
              <div className='bg-ligthGrayBackground rounded-full flex items-center justify-center w-[42px] h-[42px]'>
                <FaTwitter className='text-secondary'/>
              </div>
              <div className='bg-ligthGrayBackground rounded-full flex items-center justify-center w-[42px] h-[42px]'>
                <FaInstagramSquare className='text-secondary'/>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/4">
            <p className='text-primary'>Servicios y especialidades</p>
            <div className='w-full md:flex'>
              <ul>
              {
                React.Children.toArray(
                  row1.map(item => (                        
                    <li className='text-white'><a href=""><p>{item.name}</p></a></li>                   
                  ))
                )               
              }  
              </ul>
              <ul>
              {
                React.Children.toArray(
                  row2.map(item => (                        
                    <li className='text-white'><a href=""><p>{item.name}</p></a></li>                   
                  ))
                )               
              }  
              </ul>              
            </div>                       
          </div>
          <div className="w-full md:w-1/4">
            <p className='text-primary'>Para pacientes</p>
              <div>
                <ul>
                  {
                  React.Children.toArray(
                    data.map(item => (                        
                      <li className='text-white'><a href=""><p>{item.name}</p></a></li>                   
                    ))
                  )               
                  } 
                </ul>
              </div>
          </div>
      </div>  
      <div className='flex justify-between'>
        <p className='text-xs text-white'>Copyright © 2022. Ashford Hospital</p>
        <div className='flex justify-between'>
          <a href="">
            <p className='text-xs text-white'>Lista comprensiva de cargos del Hospital Ashford</p>
          </a>
          <a href="">
            <p className='text-xs text-white'>Política de privacidad</p>
          </a>
          <a href="">
            <p className='text-xs text-white'>Política de conflictos de interés</p>
          </a>
        </div>
      </div>     
    </div>
  )
}

export {Footer}