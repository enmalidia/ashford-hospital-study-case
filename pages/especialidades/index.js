import React from 'react'
import { Obstetricia } from "../../components/Especialidades/Obstetricia";
import { CuidadoNeonatal } from "../../components/Especialidades/Neonatal";
import { CirugiaColorrectal } from "../../components/Especialidades/CirugiaColorrectal";
import { Ortopedia } from "../../components/Especialidades/Ortopedia";
import { MedicinaDeportiva } from "../../components/Especialidades/MedicinaDeportiva";
import { Otorrinolaringologia } from "../../components/Especialidades/Otorrinolaringología";
import { Endocrinologia } from "../../components/Especialidades/Endocrinologia";
import { CirugiaGeneral } from "../../components/Especialidades/CirugiaGeneral";
import { CirugiaOncologica } from "../../components/Especialidades/CirugiaOncologica";
import { Pediatria } from "../../components/Especialidades/Pediatria";
import { Urologia } from "../../components/Especialidades/Urologia";

export default Especialidades = () => {
  return (
    <div>
      <Head>
        <title>Ashford Hospital|Especialidades</title>        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          < Obstetricia />
        </section> 
        <section>
          <CuidadoNeonatal />
        </section> 
        <section>
          <CirugiaColorrectal />
        </section>  
        <section>
          <Ortopedia />
        </section> 
        <section>
          <MedicinaDeportiva />
        </section>
        <section>
          <Otorrinolaringologia />
        </section>
        <section>
          <Endocrinologia />
        </section> 
        <section>
          <CirugiaGeneral />
        </section> 
        <section>
          <CirugiaOncologica />
        </section> 
        <section>
          <Pediatria />
        </section>
        <section>
          <Urologia />
        </section> 
      </main>
      <footer>
       
      </footer>
    </div>
  )
}
