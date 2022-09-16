import React from 'react';

import SvgIcon from '@mui/material/SvgIcon';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';

const MesaRegalos = () => {
  return (
    <>
    <h2 className='text-center'>Mesa de Regalos</h2>
    <p className='text-center'>Queremos que nuestra luna de miel sea inolvidable, si tu deseo es hacernos llegar un obsequio,  puedes ingresar al siguiente link </p>
    <div className='d-flex justify-content-center p-4'>
    <img
         className="animate__animated animate__bounce animate__slower animate__infinite	infinite m-5"
         src="../../images/regalo1.png"
         alt=""
         style={{ height: "100px" }}
       />
    </div>
    <div className='d-flex text-center justify-content-evenly pb-5'>
    <div className='d-flex justify-content-center'>
        <button style={{padding:"10px", color:"white", width:'100px',border:"none", borderRadius: "40px", background:"#bd9045", boxShadow: "inset 5px 5px 10px #ab8037 ,inset -5px -5px 10px #bd9045"}}>

      


        <a className='text-white text-decoration-none' target="_blank" href="https://sinenvolturas.pe/moshisday">Ir a</a></button>
        </div>
          
    </div>
</>
  )
}

export default MesaRegalos