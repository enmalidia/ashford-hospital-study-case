import React from 'react'
import { EmergenciaAdultos } from "../../components/Emergencia/Adultos";
import {EmergenciaIntro } from "../../components/Emergencia/Intro";
import {EmergenciaPediatrica } from "../../components/Emergencia/Pediatrica";

export default Emergencia = () => {
  return (
    <div>
      <Head>
        <title>Ashford Hospital|Emergencia</title>        
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
      <footer>
       
      </footer>
    </div>
  )
}
