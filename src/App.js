import React from 'react'
import Banner from './components/Banner'
import FechaLugar from './components/FechaLugar'
import Navbar from './components/Navbar'
import Padrinos from './components/Padrinos'
import Testigos from './components/Testigos'
import Itinerario from './components/Itinerario'
import MesaRegalos from './components/MesaRegalos'
import Collage from './components/Collage'
import Hr from './components/Hr'
import HrSecond from './components/HrSecond'
import Vestimenta from './components/Vestimenta'
import Asistencia from './components/Asistencia'
import SvgIcon from '@mui/material/SvgIcon';
import SpaIcon from '@mui/icons-material/Spa';
import 'animate.css';
import Sociales from './components/Sociales'

const App = () => {
  return (
    <>
    
      <Banner/>
       <section  id="main" className='d-flex p-5 flex-column text-center'>
      
      </section>
    
      <section  id="padrinos"  className='d-flex p-5 flex-column'>
      <Hr/>
        <Padrinos/>
      </section> 
      
      <section id='lugar' className='d-flex p-5 flex-column' style={{backgroundColor: "#f9f7f5"}}>
      <Hr/>
        <FechaLugar/>
      </section>
      
      <section  id="testigos" className='d-flex p-5 flex-column'  >
     

      <Hr/>
        <Testigos/>
      </section>
      
        <div className='backgroundFixed'>
 
      </div> 
        
      <HrSecond/>
     
      <section  id="itinerario" className='d-flex p-5 flex-column' style={{backgroundColor: "#f9f7f5"}} >
      <Hr/>
        <Itinerario/>
      </section>
      <section id="vestimenta"  className='d-flex p-5 flex-column'>
      <Hr/>
        <Vestimenta/>
      </section>
      <section id="regalo"  className='d-flex p-5 flex-column ' style={{backgroundColor: "#f9f7f5"}}>
      <Hr/>
        <MesaRegalos/>
      </section>
      

      <section id="collage" className='d-flex p-5 flex-column'>
      <Hr/>
        <Collage/>
      </section>
      <HrSecond/>
      <section id="redes">
            <div className='d-flex flex-wrap justify-content-space'>
                <div className='social__container' >
                </div>
                <div className='d-flex flex-column p-5  justify-content-center' >
                    
                <Hr/>
                  <Sociales/>
                      </div>
                  </div>
      </section>
      <section id="asistencia" className='d-flex p-5 flex-column' style={{backgroundColor: "#f9f7f5"}}>
      <Hr/>
        <Asistencia/>
      </section>
   
      <div className='hr__second text_ending ' style={{height:'200px'}} >
            <h2 className='text-light text-center pt-5' >¡Gracias por compartir este día con nosotros!</h2>
            <div className='text-white fs-4 text-center' >
            _______________ <SvgIcon component={SpaIcon}/> _______________</div>

   </div>

      
    </>
  )
}

export default App