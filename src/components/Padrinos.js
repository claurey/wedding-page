import React from 'react'
import Hr from './Hr'


const Padrinos = () => {
  return (
    <>
        <h2 className='text-center'>Padres</h2>
        <div className=' d-flex text-center justify-content-evenly p-4'>
            <div className='container_h3'>
                <h3>
                Jesús Acuña Camacho<br/> <br/>Haida Gonzales Moscoso<br/>
                </h3>
            </div>
            <div className='container_h3'>
                <h3>
                Egdard Paredes Terán<br/> <br/>Lisbeth Poblete Cáceres<br/>
                </h3>
            </div>
            
        </div>
        <p className='container_p text-center p--center mt-4'>"Felices y emocionados de acompañar la decisión de nuestros hijos de unir sus vidas. <br/> Que el ejemplo y amor de nuestras familias siga creciendo en la que ellos estan iniciando juntos."</p>
    </>
  )
}

export default Padrinos