import React from "react";

const Vestimenta = () => {
  return (
    <>
      <h2 className="text-center">
        Código de vestimenta
      </h2>
      <h3 className='h3__bigger text-center'>Estrictamente formal</h3>
      <div
        className="d-flex text-center justify-content-center flex-wrap"
        style={{ gap: "50px" }}
      >
        <div className="d-flex flex-column justify-content-center " >
          <img
         className="animate__animated  animate__slideInLeft animate__infinite	infinite animate__slow animate__delay-2s"
            src="../../images/man.png"
            alt=""
            style={{ height: "350px" }}
          />
        <p>Terno</p>
        <img
            className="text-center"
            src="../../images/paleta.png"
            alt="paleta"
            style={{ height: "40px" , width:"150px"}}
          />
        </div>
        <div className="d-flex flex-column justify-content-center " >
        <img
           className="animate__animated  animate__slideInRight animate__infinite	infinite animate__slower "
            src="../../images/woman.png"
            alt=""
            style={{ height: "350px" }}
          />
          <p>Vestido largo</p>
          <div>
            <img
    
                src="../../images/paleta.png"
                alt="paleta"
                style={{ height: "40px" , width:"150px"}}
            />

          </div>
        </div>
      </div>
    </>
  );
};

export default Vestimenta;
