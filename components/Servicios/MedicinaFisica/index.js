import React from 'react'
import { FiArrowRight, FiPhone, FiClock } from "react-icons/fi";
import { BsGeo } from "react-icons/bs";

const MedicinaFisica = () => {
  return (
    <div className='mx-auto md:flex bg-blueBackground pt-28'>     
      <div className='w-2/4 py-14 px-28'>
        <h5>servicios</h5>
        <h1 className='text-white'>Centro de medicina física y rehabilitación</h1>
        <p className='text-white'>En nuestro centro de medicina física y rehabilitación atendemos pacientes con condiciones ortopédicas, musculares, neurológicas y parálisis. Somos el único hospital en Puerto Rico que cuenta con técnicos especializados en la rehabilitación del suelo pélvico y el único hospital privado de la isla con un centro de rehabilitación cardiaca. Nuestro personal experto utiliza equipos de estimulación eléctrica, ultrasonido, láser, ejercicios terapéuticos y baños de parafina para proveer el mejor tratamiento para aliviar su dolor o molestia.</p>
        <p className='text-primary'>Información, ubicación y horarios</p>     
        <div className='flex'>
          <FiPhone className='text-primary mr-2'/>
          <p className='text-xs text-white'>(787) 722-2915 o al 721-2160, ext. 1022 ó 1021</p>
        </div>        
        <div className='flex'>
          <FiClock className='text-primary mr-2'/>
          <div className='flex flex-col'>
            <p className='text-xs text-white'>Lunes a viernes de 6:00am - 6:00pm</p>         
          </div>         
        </div>
        <div className='flex'>
          <BsGeo className='text-primary mr-2'/>
          <p className='text-xs text-white'>Primer piso, edificio de administración (detrás de sala de emergencia)</p>
        </div>        
      </div>
      <div className='w-2/4 rounded-sm'>
        <img src="/images/services/serv4.jpg" alt="" />
      </div>
    </div>
  )
}

export {MedicinaFisica}