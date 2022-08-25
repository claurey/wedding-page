import React from 'react';
import DoNotDisturbRoundedIcon from '@mui/icons-material/DoNotDisturbRounded';
import SvgIcon from '@mui/material/SvgIcon';

const Asistencia = () => {
  return (
    <>
    <h2 className='text-center'>Qué hacer en Arequipa?</h2>


    <div className='misti mb-5'>

</div>
    <div className='hotel px-4 mb-5'>
    <h3 className="mb-5 text-center">Dónde hospedarse?</h3>
    <ul className='hoteles'>
      <li>
      <p><h5>Los Andes</h5> </p>
      <p>Teléfono: +51 54 330015</p> 
      <p>Dirección: La Merced 123, Arequipa</p> 
     </li>
     <li>
      <p><h5>Vita Hotel</h5> </p>
      <p>Celular: 959356546</p> 
      <p>Dirección: Calle Zela 305, Arequipa</p> 
     </li>
     <li>
      <p><h5>Mirador del Monasterio</h5> </p>
      <p>Teléfono: 054 225122</p> 
      <p>Dirección: Calle Zela 301, Arequipa</p> 
     </li>
  
    </ul>
   
 
    </div>


    <div className='donde text-center px-4'>
    <div >
    <h3 className="mb-3 text-center">Cómo trasladarse?</h3>
    <ul className='hoteles '>
      <li>
      <p><h5>Taxitel</h5> </p>
      <p>Teléfono: 054 452020</p> 
     </li>
  
    </ul>
   
    </div>

  


    <div >
    <h3 className="mb-3">Quieres conocer Arequipa?</h3>
    <ul className='hoteles'>
      <li>
      <p><h5>Tour Maravillas Peruanas Travels EIRL</h5> </p>
      <p>Celular: 958536146 / 964109665</p> 
     </li>
  
    </ul>
   
 
    </div>

    </div>

    
 

</>
  )
}

export default Asistencia