import React from 'react'
import Head from 'next/head'
import { Footer } from "../../components/Footer"
import { Radiologia } from '../../components/Servicios/Radiologia'
import { MedicinaNuclear } from "../../components/Servicios/Nuclear";
import {Laboratorio } from "../../components/Servicios/Laboratorio";
import { MedicinaFisica } from "../../components/Servicios/MedicinaFisica";
import { CuidadoHeridas } from "../../components/Servicios/Heridas";
import { Prenatal } from '../../components/Servicios/Prenatal';
import { CentroMujer } from "../../components/Servicios/Mujer";
import { Vacunacion } from "../../components/Servicios/Vacunacion";
import { Farmacia } from '../../components/Servicios/Farmacia';

export default function Servicios() {
  return (
    <div>
        <Head>
        <title>Ashford Hospital | Servicios</title>        
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
        <section>
            <Radiologia />
        </section> 
        <section>
            <MedicinaNuclear />
        </section> 
        <section>
            <Laboratorio />
        </section>  
        <section>
            <MedicinaFisica />
        </section> 
        <section>
            <CuidadoHeridas/>
        </section> 
        <section>
            <Prenatal/>
        </section>
        <section>
            <CentroMujer/>
        </section>
        <section>
            <Vacunacion/>
        </section>
        <section>
            <Farmacia/>
        </section>
        </main>
        <Footer/>
    </div>
  )
}
