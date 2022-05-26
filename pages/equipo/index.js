import React from 'react'
import Head from 'next/head'
import { Footer } from "../../components/Footer"
import {GrayContainer} from '../../components/FAQs/styles';
import { Team } from '../../components/Equipo'

export default function Equipo() {
  return (
    <>
      <Head>
        <title>Ashford Hospital | Equipo</title>        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GrayContainer>
            <Team />
        </GrayContainer>            
      </main>
      <Footer/>
    </>
  )
}
