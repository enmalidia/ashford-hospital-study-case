import React from 'react'
import { FiArrowRight, FiPhone, FiClock } from "react-icons/fi";
import { BsGeo } from "react-icons/bs";
import data from './data.json'

const MedicinaNuclear = () => {
  return (
    <div className='container mx-auto'>
      <h5>servicios</h5>
      <h1 className='text-darkGray'>Medicina nuclear y centro de cardiología</h1>
      <p>Diferente a la radiología convencional, la fortaleza de la medicina nuclear reside en el uso de trazadores radiactivos para estudiar la función de los órganos del cuerpo. Contamos con cuatro tecnólogos licenciados en el campo de medicina nuclear, tres médicos especializados y un grupo de cardiólogos especializado en la cardiología nuclear. Ofrecemos excelentes métodos no invasivos para el diagnóstico y tratamiento de muchas condiciones médicas:</p>
      <div className='flex flex-wrap'>
         {
            React.Children.toArray(
              data.map(item => ( 
                  <div className='flex w-1/3'>
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
        <p className='text-xs'>(787) 721-2160 ext. 1005, 1017, 6775</p>
      </div>
      <div className='flex'>
        <BsGeo className='text-primary mr-2'/>
        <p className='text-xs'>Primer piso</p>
      </div>
      <div className='flex'>
        <FiClock className='text-primary mr-2'/>
        <p className='text-xs'>Lunes a viernes de 7:00am - 4:00pm</p>
      </div>
      <div>
          <p className='text-primary'>Solicitar cita online</p>
          <div className='flex items-center'>
            <img src="/images/services/qr-nuclear-medicine.png" alt="" className='p-4 w-1/12' />
            <p className='text-xs w-11/12'>En tu teléfono, abre la app de la cámara. Apunta la cámara hacia el código QR. Presiona el banner que aparece en tu teléfono y sigue las instrucciones en pantalla para completar el proceso de acceso.</p>
          </div>
        </div>         
    </div>
  )
}

export {MedicinaNuclear}