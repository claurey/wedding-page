import React from 'react'

const Testigos = () => {
  return (
    <>
        <h2 className='text-center'>Testigos</h2>
        <div className='testigos-container d-flex text-center justify-content-evenly p-4 gap-5 flex-wrap'>
            <div className='card__testigos'>
                <p className='p--center p-1 pb-4' style={{textAlign:"justify"}}>"Camu y yo somos amigas desde que tenemos 14 años, la he visto ser feliz, reír, crecer, alcanzar cada sueño; pero también la he visto caer para volver levantarse y empezar de nuevo. Siempre la he visto como una mujer tenaz,determinada y de un carácter imponente, y siempre dispuesta a brindar su mano y corazón cuando la necesitas. Camu no es solo mi amiga, si no que es mi hermana, mi ejemplo a seguir y muchas veces el “yo quiero ser así de grande“. Cuando Fabricio llegó a nuestras vidas ( por que también llegó a la mía), le puso la sal y el limón al shot de tequila, complementando maravillosamente a esta mujer que tengo la dicha de llamar amiga y tengo la seguridad que no solo la hace feliz si no que también están hechos el uno para el otro."</p>
                <h3 style={{textAlign:"right", paddingRight:"10px"}}>
                Carmen Alarcón Carrión
                </h3>
            </div>
            <div className='card__testigos'>
                 <p className='p--center p-1 pb-4'  style={{textAlign:"justify"}}>
                 "Fabricio, los buenos amigos como tu no se encuentran con facilidad,  nos hemos acompañado en las buenas y alentándo mutuamente cuando algo no salía bien desde la universidad, por eso siempre serás mi hermano.
Hoy puedo decir con mucha satisfacción que hemos logrado parte de nuestros sueños. En tu caso, amigo mío, eres ya un gran médico y tu futuro profesional es más que prometedor. Todo lo maravilloso de tu vida, ahora se complementará de manera perfecta al unir y compartir tus sueños con Camu. 
Les deseo toda la felicidad del mundo."
                 </p>
                <h3 style={{textAlign:"right", paddingRight:"10px"}}>
                Franz Zevallos Zúñiga 
                </h3>
            </div>
            
        </div>
    </>
  )
}

export default Testigos