import React from 'react'
import Head from 'next/head'
import { Footer } from "../../components/Footer"
import { Guide } from '../../components/Guia'

export default function Guia () {
  return (
    <>
      <Head>
        <title>Ashford Hospital | Guía para pacientes</title>        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
            <Guide />
        </section>            
      </main>
      <Footer/>      
    </>
  )
}
