import React from 'react'
import  data  from "./data.json";
import { Card } from "../../styles/global";
import { EstetoSVG, DataSVG, ManSVG, TimeSVG } from "./iconsSVG";


const FAQs = () => {
  return (
    <div className='container mx-auto w-full md:w-4/5'>
        <h2 className='text-secondary text-center'>¡Saludos! ¿Cómo podríamos ayudarle?</h2>
        <div className="flex flex-wrap py-12">
            <Card className="justify-center m-2 text-center">
                <EstetoSVG />
                <p className='my-6'>{data[0].title}</p>
                <h6 className='mb-4'>{data[0].description}</h6>
            </Card>
            <Card className="justify-center m-2 text-center">
                <DataSVG />
                <p className='my-6'>{data[1].title}</p>
                <h6 className='mb-4'>{data[1].description}</h6>
            </Card>
            <Card className="justify-center m-2 text-center">
                <TimeSVG />
                <p className='my-6'>{data[2].title}</p>
                <h6 className='mb-4'>{data[2].description}</h6>
            </Card>
            <Card className="justify-center m-2 text-center">
                <ManSVG />
                <p className='my-6'>{data[3].title}</p>
                <h6 className='mb-4'>{data[3].description}</h6>
            </Card>                
        </div>
    </div>
  )
}

export {FAQs}