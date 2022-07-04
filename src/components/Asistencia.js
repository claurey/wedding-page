import React from 'react';
import DoNotDisturbRoundedIcon from '@mui/icons-material/DoNotDisturbRounded';
import SvgIcon from '@mui/material/SvgIcon';

const Asistencia = () => {
  return (
    <>
    <h2 className='text-center'>Confirma tu asistencia</h2>
    <p className='text-center pb-2'>Te pedimos confirmar tu asistencia, ingresando al siguiente link.</p>

    <div className='d-flex justify-content-center p-4 '>
    <img
         className="animate__animated animate__bounce animate__slower animate__infinite	infinite"
         src="../../images/list.png"
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

    {/* <div className='d-flex text-center justify-content-evenly p-4'> */}

 
    {/* <div className="container d-flex justify-content-center">

        <div className="col-md-6 ">
        
          <form className="needs-validation" novalidate autocomplete="off">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="firstName">Nombres</label>
                <input type="text" className="form-control" id="firstName"  required/>
  
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Apellidos</label>
                <input type="text" className="form-control" id="lastName"  required/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 mb-3">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" />
  
              </div>
              <div className="col-md-4 mb-3">
                <label for="phone">Celular</label>
                <input type="text" className="form-control" id="phone" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 mb-3">
              <label for="address">Dirección</label>
              <input type="text" className="form-control" id="address"/>
  
              </div>
              <div className="col-md-4 mb-3">
                <label for="phone">Ciudad de residencia</label>
                <input type="text" className="form-control" id="phone" />
              </div>
            </div>

            <hr className="mb-4"/>
           

            <h3 className="mb-3">¿Podrás asistir?</h3>

            <div className="d-block my-3 ">
              <div className="custom-control custom-radio ">
                <input id="si" name="answer" type="radio" className="custom-control-input mx-3" checked required/>
                <label className="custom-control-label" for="si">¡Claro, ahí nos vemos!</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="no" name="answer" type="radio" className="custom-control-input mx-3" required/>
                <label className="custom-control-label" for="no">No podré, lo siento</label>
              </div>
            <div className='text-start py-4'><SvgIcon component={DoNotDisturbRoundedIcon} fontSize='small'/> No niños</div>
            </div> 
            
            <hr className="mb-4"/>
            <button style={{padding:"10px", color:"white", width:'150px',border:"none", borderRadius: "40px", background:" #915832", boxShadow: "inset 5px 5px 10px #a7653a,inset -5px -5px 10px #a7653a"}}>
        Enviar</button>
        


          </form>
        </div>
   


    </div> */}
    
         
    {/* </div> */}
</>
  )
}

export default Asistencia