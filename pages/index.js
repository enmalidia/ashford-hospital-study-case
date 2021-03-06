import Head from 'next/head'
import { Hero } from '../components/Hero'
import { FAQs } from '../components/FAQs'
import { DatosInteres } from '../components/Interes'
import { Especialidades } from '../components/Especialidades'
import { Servicios } from '../components/Servicios'
import {GrayContainer} from '../components/FAQs/styles';
import { Footer } from "../components/Footer"
import { NavigationBar } from '../components/Navbar.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ashford Hospital|Home</title>        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className='h-screen'>
          <NavigationBar/> 
          <Hero />
        </section> 
        <GrayContainer className='py-28 relative'>
          <FAQs />
        </GrayContainer> 
        <section>
          <DatosInteres />
        </section>  
        <section>
          <Especialidades />
        </section> 
        <GrayContainer>
          <Servicios />
        </GrayContainer> 
      </main>
      <Footer />
    </div>
  )
}
