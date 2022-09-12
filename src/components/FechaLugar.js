import React from 'react';

import SvgIcon from '@mui/material/SvgIcon';
import ChurchRoundedIcon from '@mui/icons-material/ChurchRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';


const FechaLugar = () => {
  return (
    <>
        <h2  className='text-center'>Ceremonia y Recepción</h2>
        <p className='text-center header__date'>08 . 12 . 2022</p>
        
        <div className='d-flex text-center justify-content-center flex-wrap' style={{gap:'50px'}}>
            <div className='image_container d-flex flex-column justify-content-center '>
                  <img className='p-4' src="../../images/mansion.jpg" alt="" style={{width:'500px'}}/>
                  <img className='p-4' src="../../images/mansion01.jpeg" alt="" style={{width:'500px'}}/>
            </div>
            <div className='d-flex flex-column justify-content-center'>
               <div className='pb-3 fs-4 text-center' style={{color:"#d2b49a"}}>
                <SvgIcon component={ChurchRoundedIcon} fontSize='large'/> </div>

                <h3 className='pb-2' style={{fontFamily:"'Quattrocento', cursive", color: "#bd9045" , fontSize:"24px"}}>La Mansión del Fundador</h3>
                <p>Huasacache s/n Vía Paisajista<br/>Hunter, Arequipa - Perú</p>
                <div className='d-flex justify-content-center pt-4'>
                      <iframe title='La Mansión del fundador' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.4091980724806!2d-71.56549393527062!3d-16.454805088643727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9143b552ff9c98bb%3A0xc12a9f5af25c81ae!2sLa%20Mansi%C3%B3n%20del%20Fundador%2C%20561%2038%2C%20Arequipa%2004011!5e0!3m2!1ses-419!2spe!4v1654104549083!5m2!1ses-419!2spe" width="400" height="250" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
               
             </div>
            
        </div>
        <div className='d-flex justify-content-center p-4 mt-4'>
        <button style={{padding:"10px", color:"white", width:'150px',border:"none", borderRadius: "40px", background:"#bd9045", boxShadow: "inset 5px 5px 10px #ab8037 ,inset -5px -5px 10px #bd9045"}}>
        {/* /* background-color: #bd9045; */
    /* background-color: #d2b49a; *background-color:#d4af83; */}
        <a className='text-white text-decoration-none' target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&tmeid=N2pxbjdubzNtaXI4dXEzM2FwaTAxNGhxZTcgcmV5bmFoLmNsYXVkaWFlQG0&tmsrc=reynah.claudiae%40gmail.com">Agendar <SvgIcon component={TodayRoundedIcon} fontSize='medium'/></a></button>
        </div>
        <div className='text-center pt-3'>
        <div className='d-flex noni'>

      <p className='nokids mt-2'> - NO NIÑOS -  </p>
      <div className='p-5 pt-0'>
      <p className='pt-4 p-5 nokid'>“Deseamos que todos disfruten al máximo de la fiesta de matrimonio y por eso decidimos que sea solo de adultos. Deseamos que esto no sea un obstáculo para contar con su presencia, puesto que es importante para nosotros”.</p>
      </div>
 
        </div>
        </div>
        
    </>
  )
}

export default FechaLugar