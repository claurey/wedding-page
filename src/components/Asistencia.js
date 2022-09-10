import React from 'react';
import DoNotDisturbRoundedIcon from '@mui/icons-material/DoNotDisturbRounded';
import SvgIcon from '@mui/material/SvgIcon';

const Asistencia = () => {
  return (
    <>
    <h2 className='text-center mb-5'>Ciudad Blanca</h2>


    {/* <div className='misti mb-5'>

</div> */}
    <div className='hotel px-4 mb-5'>
    <h3 className="mb-5 text-center">Dónde podrías hospedarte?</h3>
    <div className="text-center mb-5">
    <i className="fa-sharp fa-solid fa-hotel fa-3x" style={{color:'#bd9045'}}></i>
    </div>
    
    <ul className='hoteles'>
      <li>
      <p className="text-center"><h5>Los Andes</h5> </p>
      <p>Teléfono: +51 54 330015 <br />Dirección: La Merced 123, Arequipa</p> 
     
     </li>
     <li>
     <p className="text-center"><h5>Vita Hotel</h5> </p>
      <p>Celular: 959356546 <br />Dirección: Calle Zela 305, Arequipa</p> 
     </li>
     <li>
     <p className="text-center"><h5>Mirador del Monasterio</h5> </p>
      <p>Teléfono: 054 225122 <br />Dirección: Calle Zela 301, Arequipa</p> 
      
     </li>
  
    </ul>
   
 
    </div>


    <div className='donde text-center px-4'>
    <div className='mb-5'>
    <h3 className="mb-4 text-center">Para movilizarte...</h3>
    <div className="text-center mb-4">
    <i className="fa-sharp fa-solid fa-car fa-3x" style={{color:'#bd9045'}}></i>
    </div>
    <div className='hoteles '>
      <li>
      <p><h5>Taxitel</h5> </p>
      <p>Teléfono: 054 452020</p> 
     </li>
  
    </div>
   
    </div>

  


    <div  className='mb-5'>
    <h3 className="mb-4">Si quieres conocer más de esta linda ciudad …</h3>
    <div className="text-center mb-4">
    <i className="fa-regular fa-map-location-dot fa-3x" style={{color:'#bd9045'}}></i>

 

    </div>
    <div className='hoteles'>
      <li>
      <p><h5>Tour Maravillas Peruanas Travels EIRL</h5> </p>
      <p>Celular: 958536146 / 964109665</p> 
     </li>
  
    </div>
   
 
    </div>

    </div>

    
 

</>
  )
}

export default Asistencia