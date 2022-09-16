import React from 'react';
import Conteo from './Conteo';

import SvgIcon from '@mui/material/SvgIcon';
import SpaIcon from '@mui/icons-material/Spa';


const Banner = () => {
  return (
    <div id="banner" className='text-center banner__container d-flex flex-column justify-content-end align-items-center '>

            <div className='text-white bannertitulo'>
                <h1 className='header_h1 pb-1'>Camu <span className='header_h1-span'>&</span> Fabri</h1>
            </div>
            <div className='text-white arrow  fs-4'>_________________ <SvgIcon component={SpaIcon}/> _________________</div>
            <div className='pb-4 mt-1'>
         
                <Conteo/>
            </div>


    </div>
  )
}

export default Banner