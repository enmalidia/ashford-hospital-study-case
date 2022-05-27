import React from 'react'
import Head from 'next/head'
import { Footer } from "../../components/Footer"
import { Testimonials } from '../../components/Testimonios'

export default function Testimonios() {
  return (
    <>
      <Head>
        <title>Ashford Hospital | Testimonios</title>        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
            <Testimonials />
        </section>                
      </main>
      <Footer/>
    </>
  )
}
