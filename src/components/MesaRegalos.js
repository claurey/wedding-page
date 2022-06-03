import React from 'react';

import SvgIcon from '@mui/material/SvgIcon';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';

const MesaRegalos = () => {
  return (
    <>
    <h2 className='text-center'>Mesa de Regalos</h2>
    <p className='text-center'>Nuestro mejor regalo es tu presencia, pero si tu deseo es hacernos un regalo, puedes ingresar al siguiente link:</p>
    <div className='d-flex justify-content-center p-4'>
    <img
         class="animate__animated animate__bounce animate__slower animate__infinite	infinite"
         src="../../images/regalo.png"
         alt=""
         style={{ height: "180px" }}
       />
    </div>
    <div className='d-flex text-center justify-content-evenly'>
    <div className='d-flex justify-content-center'>
        <button style={{padding:"10px", color:"white", width:'100px',border:"none", borderRadius: "40px", background:" #915832", boxShadow: "inset 5px 5px 10px #a7653a,inset -5px -5px 10px #a7653a"}}>
        <a className='text-white text-decoration-none' target="_blank" href="#">Ir a</a></button>
        </div>
         
    </div>
</>
  )
}

export default MesaRegalos