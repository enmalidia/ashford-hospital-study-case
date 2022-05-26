import React from 'react'
import Head from 'next/head'
import { EmergenciaAdultos } from "../../components/Emergencia/Adultos";
import {EmergenciaIntro } from "../../components/Emergencia/Intro";
import {EmergenciaPediatrica } from "../../components/Emergencia/Pediatrica";
import { Footer } from "../../components/Footer"

export default function Emergencia() {
  return (
    <>
      <Head>
        <title>Ashford Hospital | Emergencia</title>        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
            <EmergenciaIntro />
        </section> 
        <section>
            <EmergenciaAdultos />
        </section> 
        <section>
            <EmergenciaPediatrica />
        </section> 
        
      </main>
      <Footer/>
    </>
  )
}
