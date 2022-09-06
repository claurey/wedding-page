import React from 'react';

import SvgIcon from '@mui/material/SvgIcon';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';

const MesaRegalos = () => {
  return (
    <>
    <h2 className='text-center'>Mesa de Regalos</h2>
    <p className='text-center'>Queremos que nuestra luna de miel sea inolvidable, si tu deseo es hacernos un presente, puedes ingresar al siguiente link </p>
    <div className='d-flex justify-content-center p-4'>
    <img
         className="animate__animated animate__bounce animate__slower animate__infinite	infinite"
         src="../../images/regalo.png"
         alt=""
         style={{ height: "180px" }}
       />
    </div>
    <div className='d-flex text-center justify-content-evenly'>
    <div className='d-flex justify-content-center'>
        <button style={{padding:"10px", color:"white", width:'100px',border:"none", borderRadius: "40px", background:" #91652f", boxShadow: "inset 5px 5px 10px #91652f,inset -5px -5px 10px #91652f"}}>
        <a className='text-white text-decoration-none' target="_blank" href="https://sinenvolturas.pe/bodadecamufabri">Ir a</a></button>
        </div>
          
    </div>
</>
  )
}

export default MesaRegalos