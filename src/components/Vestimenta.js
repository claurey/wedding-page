import React from "react";

const Vestimenta = () => {
  return (
    <>
      <h2 className="text-center">
        Código de Vestimenta
      </h2>
      <h3 className='h3__bigger text-center'>Formal</h3>
      <div
        className="d-flex text-center justify-content-center flex-wrap"
        style={{ gap: "50px" }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center pb-5" >
        
        <img
            className="text-center"
            src="../../images/paleta.png"
            alt="paleta"
            style={{  width:"150px"}}
          />
        <div>
        <p className="pt-4 mt-4">Vestido largo / Traje</p>
        <p className="pb-4"><small>Evitar usar colores blancos o similares</small>
        </p>
        </div>
        
        
        
          
        </div>
      
      </div>
    </>
  );
};

export default Vestimenta;
