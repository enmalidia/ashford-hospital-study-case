import Head from 'next/head'
import { Hero } from '../components/Hero'
import { FAQs } from '../components/FAQs'
import { DatosInteres } from '../components/Interes'
import { Especialidades } from '../components/Especialidades'
import { Servicios } from '../components/Servicios'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ashford Hospital</title>        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <Hero />
        </section> 
        <section>
          <FAQs />
        </section> 
        <section>
          <DatosInteres />
        </section>  
        <section>
          <Especialidades />
        </section> 
        <section>
          <Servicios />
        </section> 
      </main>
      <footer>
       
      </footer>
    </div>
  )
}
