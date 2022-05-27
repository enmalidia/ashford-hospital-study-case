import React from 'react'
import data from './data.json'

const Guide = () => {
  return (
    <div className='container mx-auto md:flex'>
        <div className='w-full md:w-1/2 bg-white shadow-xl'>
            <div className=''>
                <div className='m-4'>
                    <img src="/images/guide1.png" alt="" />
                    <div>
                        <h3 className='text-secondary'>Descargar guía del paciente:</h3>
                    </div>
                </div>
            </div>            
        </div>
        <div className='w-full md:w-1/2'>
            <h5 className="mb-4">para pacientes</h5>
            <h1 className='text-darkGray'>Guía paciente</h1>
            <p className='text-primary'>Carta de Directora Ejecutiva:</p>
            <p>Estimado paciente:</p>
            <p>¡Bienvenido al Hospital Ashford!</p>
            <p>En el Hospital Ashford nuestra misión es atenderle con servicios médicos de excelencia sin perder el calor humano que nos caracteriza. Por 118 años, nos hemos distinguido por nuestro compromiso y dedicación a la salud de Puerto Rico. Junto a nuestra facultad médica de primera, el bienestar de nuestros pacientes siempre va a ser primordial y esperamos que su estancia sea lo más agradable posible. <br/>Trabajamos para recibir la aprobación y agradecimiento de cada uno de nuestros pacientes en todo momento, interacción y servicio que brindemos. Diseñamos esta Guía del Paciente para orientarlo a usted y a su familia sobre el funcionamiento del Hospital y las normas que rigen nuestra institución, las cuales deben ser respetadas durante su estadía. De igual forma, queremos explicarle sus derechos como paciente y trabajar juntos hacia su pronta recuperación.<br/>A nombre de la Junta de Síndicos, de la Administración, la Facultad Médica y de nuestros empleados le damos una cordial bienvenida y le agradecemos la confianza depositada en nuestra institución.</p>
            <div className='flex py-8'>
                <img src="/images/eje11.png" alt="" />
                <div className=''>
                    <p className='text-secondary'>Lcda. Itza Soto</p>
                    <p className='text-xs text-lightGray'>Directora Ejecutiva</p>
                </div>                
            </div>
            <div>
                <h3 className='text-primary'>Planes médicos aceptados</h3>
                <div className='flex flex-wrap flex-row'>
                    {
                        React.Children.toArray(
                            data.map(item => ( 
                                <div className='w-1/3 p-2'>
                                    <img src={item.url}/>
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

export {Guide}