import React from 'react'
import { FiArrowRight, FiPhone, FiClock } from "react-icons/fi";
import { BsGeo } from "react-icons/bs";
import data from "./data.json"

const Radiologia = () => {
  return (
    <div className='mx-auto md:flex'>
      <div className='w-2/5'>
        <img src="/images/services/serv1.png" alt="" />
      </div>
      <div className='w-3/5'>
        <h5>servicios</h5>
        <h1 className='text-darkGray'>Radiología/Centro de imágenes</h1>
        <p>Nuestros radiólogos combinan su experiencia y conocimiento con la tecnología más avanzada para ofrecer diagnósticos confiables. Trabajamos para que sus resultados estén listos en un periodo no mayor de 24 horas.</p>
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
        <p className='text-primary'>Información, ubicación y horarios</p>     
        <div className='flex'>
          <FiPhone className='text-primary mr-2'/>
          <p className='text-xs'>(787) 721-2160, ext. 1042, 1045 y 1046</p>
        </div>
        <div className='flex'>
          <BsGeo className='text-primary mr-2'/>
          <p className='text-xs'>Primer piso (entrando por la recepción a mano izquierda)</p>
        </div>
        <div className='flex'>
          <FiClock className='text-primary mr-2'/>
          <div className='flex flex-col'>
            <p className='text-xs'>
              Servicio de mamografía, MRI, CT scan
              <br/>Lunes a viernes de 6:30am - 4:00pm
              </p>
            <p className='text-xs'>
              Servicio de sonografía:
              <br/>Lunes a viernes de 7:00am - 5:00pm
              <br/>Sábado de 8:00am - 12:00pm
            </p>          
            <p className='text-xs'>Servicios de radiología:
              <br/>Lunes a viernes de 7:00am - 5:00pm
              <br/>Sábado y domingo de 7:00am - 5:00pm
            </p>
            <p className='text-xs'>Entrega de resultados:
              <br/>Lunes a viernes de 8:00am - 5:00pm
              <br/>Sábado de 8:00am - 12pm
            </p>
          </div>         
        </div>
        <div>
          <p className='text-primary'>Solicitar cita online</p>
          <div className='flex'>
            <img src="/images/services/qr-images-center.png" alt="" className='mr-4 w-1/12' />
            <p className='text-xs w-11/12'>En tu teléfono, abre la app de la cámara. Apunta la cámara hacia el código QR. Presiona el banner que aparece en tu teléfono y sigue las instrucciones en pantalla para completar el proceso de acceso.</p>
          </div>
        </div> 
      </div>
    </div>
  )
}

export {Radiologia}