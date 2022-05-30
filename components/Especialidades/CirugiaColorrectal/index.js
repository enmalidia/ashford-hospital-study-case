import React from 'react'
import { FiArrowRight } from "react-icons/fi";

const CirugiaColorrectal = () => {
  return (
    <div className='container mx-auto'>
      <h5>especialidad</h5>
      <h1 className='text-darkGray'>Cirugía colorrectal</h1>
      <p className='text-primary'>¿Se ha hecho sus pruebas de detección para el cáncer colorrectal?</p>
      <p>La medicina colorrectal se dedica al diagnóstico y tratamiento de condiciones del colon, recto y ano. Nuestra clínica es el único centro colorrectal de la isla con cirujanos entrenados para realizar microcirugía transanal endoscópica. Contamos con especialistas en las destrezas de cirugía laparoscópica o mínimamente invasivas y nos distinguimos por ser el único centro experimentado en el tratamiento de incontinencia fecal.</p>
      <div className='flex'>
        <FiArrowRight className='text-primary'/>
        <p>Consulte nuestro directorio médico para información sobre nuestros especialistas</p>                      
      </div>
    </div>
  )
}

export {CirugiaColorrectal}