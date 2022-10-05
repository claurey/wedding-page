import React from "react";

import SvgIcon from "@mui/material/SvgIcon";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";

const MesaRegalos = () => {
  return (
    <>
      <h2 className="text-center">Mesa de Regalos</h2>
      <div className="d-flex justify-content-center ">

      <p className="text-center " style={{maxWidth:'1100px'}}>
        Queremos que nuestra luna de miel sea inolvidable, si tu deseo es
        hacernos llegar un obsequio, agradecemos realizarlo depositando a la
        siguiente cuenta bancaria o ingresando al enlace de nuestra mesa de regalos.
      </p>
      </div>
      <div className="d-flex justify-content-center p-4">
        <img
          className="animate__animated animate__bounce animate__slower animate__infinite	infinite m-5"
          src="../../images/regalo1.png"
          alt=""
          style={{ height: "100px" }}
        />
      </div>
      <div className=" flex-wrap mesita d-flex justify-content-around align-items-start ">
        <div className=" d-flex gap-2 justify-content-center align-items-center flex-column pb-5">
          <button
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            style={{
                padding: "10px",
                color: "white",
                width: "190px",
                border: "none",
                borderRadius: "40px",
                background: "#bd9045",
                boxShadow:
                  "inset 5px 5px 10px #ab8037 ,inset -5px -5px 10px #bd9045",
              }}
          >
            Datos bancarios
          </button>


        



          <div className="collapse text-center" id="collapseExample">
          <div className="d-flex flex-column align-items-center gap-2">

            <i className="fa-solid fa-arrow-down" style={{color:'#bd9045'}}></i>
            <div className="card card-body" style={{ width: "18rem", border:"1px solid #bd9045" }}>
              <h6 style={{color:'#bd9045'}}>Cuenta de Ahorro Soles Interbank</h6>
              Número de cuenta: 1193113095961 
              <br />
              CCI: 00311901311309596155

            </div>
          </div>
          
          </div>
        </div>
        <div className="d-flex text-center justify-content-center pb-5">
          <div className="d-flex justify-content-center">
            <button
              style={{
                padding: "10px",
                color: "white",
                width: "190px",
                border: "none",
                borderRadius: "40px",
                background: "#bd9045",
                boxShadow:
                  "inset 5px 5px 10px #ab8037 ,inset -5px -5px 10px #bd9045",
              }}
            >
              <a
                className="text-white text-decoration-none"
                target="_blank"
                href="https://sinenvolturas.pe/moshisday"
              >
                Mesa de regalos
              </a>
            </button>
          </div>
        </div>

      </div>

    </>
  );
};

export default MesaRegalos;
