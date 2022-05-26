import React from 'react'
import Head from 'next/head'
import {GrayContainer} from '../../components/FAQs/styles';
import { Vision } from '../../components/Vision'
import { Us } from '../../components/Nosotros'
import { Footer } from "../../components/Footer"

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Ashford Hospital | Nosotros</title>        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GrayContainer>
            <Us />
        </GrayContainer>
        <section>
            <Vision />
        </section>        
      </main>
      <Footer/>
    </>
  )
}
