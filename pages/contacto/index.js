import React from 'react'
import Head from 'next/head'
import { Footer } from "../../components/Footer"
import { Contact } from '../../components/Contact'
import {GrayContainer} from '../../components/FAQs/styles';

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Ashford Hospital | Contacto</title>        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GrayContainer>
            <Contact />
        </GrayContainer>            
      </main>
      <Footer/>
    </>
  )
}
