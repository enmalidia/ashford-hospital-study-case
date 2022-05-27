import React from 'react'
import Head from 'next/head'
import { Footer } from "../../components/Footer"
import {GrayContainer} from '../../components/FAQs/styles';
import { AdIntro} from '../../components/Admisiones/AdIntro'
import { Requirements } from '../../components/Admisiones/Requisitos'
import { FormAdmision } from '../../components/Admisiones/Formulario'

export default function Admision() {
  return (
    <>
      <Head>
        <title>Ashford Hospital | Admisiones</title>        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
            <AdIntro />
        </section> 
        <GrayContainer>
            <Requirements/>
        </GrayContainer> 
        <section>
            <FormAdmision/>
        </section>          
      </main>
      <Footer/>
    </>
  )
}
