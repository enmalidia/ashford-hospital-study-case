import React from 'react'
import data from './data.json'

const Us = () => {
  return (
    <div className='container mx-auto w-4/5'>
        <h5 className="mb-4">sobre nosotros</h5>
        <h1 className='text-darkGray'>El Hospital Ashford: 118 años ofreciendo servicios médicos de excelencia con empatía, compasión y calor humano.</h1>
        <p className='text-primary'>Con un compromiso inquebrantable por la salud de la comunidad</p>
        <p className='text-darkGray'>El Hospital Ashford es una institución sin fines de lucro, fundada en 1904 con la convicción de servir. Desde el comienzo el Hospital Ashford se posicionó a la vanguardia de la salud ofreciendo servicios y una experiencia de paciente llena de humanidad. No hay duda que la trayectoria del Hospital Ashford ha marcado la historia de la salud en Puerto Rico y de miles de vidas que han recibido servicio en el Hospital. Hoy estamos orgullosos de los logros de nuestra Facultad Médica, la calidad de nuestros servicios y especialidades y del equipo de trabajo que cada día se esmera por que cada paciente tenga una experiencia de primera. Continuamos ofreciendo un enfoque de prevención, con terapias innovadoras, diagnósticos precisos y tratamientos personalizados que resultan en calidad de vida para todos nuestros pacientes.</p>        
        {
            React.Children.toArray(
                data.map(item => ( 
                    <div className='flex flex-col md:flex-row pb-16'>
                        <div className='w-1/4'>
                            <h1 className='text-darkGray'>{item.year}</h1>
                            <p className='text-primary'>{item.place}</p>
                        </div>
                        <div className='w-1/4'>
                            <p className='text-darkGray'>{item.description}</p>
                        </div>
                        <div className='w-2/4'>
                            <img 
                            src={item.img}                    
                            />
                        </div>  
                    </div>                                           
                ))
            )
        }
        <p className='text-primary'>A través de su historia, se ha distinguido por la innovación y por ser el primero en implementar tratamientos y tecnologías para beneficiar a los pacientes. En el 2020 fue el primer Hospital en recibir y tratar un paciente de COVID y el primero en administrar la vacuna de COVID en Puerto Rico.</p>             
    </div>
  )
}

export {Us}