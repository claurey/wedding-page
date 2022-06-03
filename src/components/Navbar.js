import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar__container ">
        <div className="container-fluid  ">
          <a className="navbar-brand text-white header_navbar" href="#banner">¡Nos casamos!</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white  active" aria-current="page" href="#banner">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="#padrinos">Padrinos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="#testigos">Testigos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="#lugar">Lugar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="#itinerario">Itinerario</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="#vestimenta">Código de vestimenta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="#recuerdo">Galería</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="#regalo">Regalos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="#asistencia">Asistencia</a>
              </li>
              
            </ul>
           
          </div>
        </div>
      </nav>
  )
}

export default Navbar