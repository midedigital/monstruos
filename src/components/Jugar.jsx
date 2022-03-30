import './Jugar.css'
import persona1 from '../assets/jugar-izq.svg'
import persona2 from '../assets/jugar-der.svg'
import persona1Desk from '../assets/jugar-izq-desk.svg'
import persona2Desk from '../assets/jugar-der-desk.svg'
import BotonJugar from './BotonJugar'
import { Link } from 'react-router-dom'
import proximamente from '../assets/proximamente.svg'
import lineaAmarilla from '../assets/linea-amarilla.svg'
import estasAhi from '../assets/estasAhi.svg'
import match from '../assets/match.svg'

const Jugar = () => {
    return(
        <div className='jugar' id='juega'>
            <div className='jugar-izq'>
                {/* <img src={lineaAmarilla} alt='linea amarilla' className='linea-amarilla' />
                <h6 className="moonlight jugar-izq-title">
                    ¿Estas listo?
                </h6> */}
                <img src={estasAhi} alt="estas listo?" className='estas-listo'/>
                <p className='jugar-izq-texto'>
                    ¡Pon en juego tus hábitos y <br></br> enfrenta a tus monstruos <br></br>financieros!
                </p>
                <img src={persona1} alt="persona1" className='persona1' />
                <img src={persona1Desk} alt="persona1" className='persona1Desk' />
                {/* <div className='boton-jugar naranja'>JUGAR</div> */}
            </div>
            <img src={proximamente} alt="proximamente" className='proximamente'/>
            <div className='jugar-der'>
                <h6 className="moonlight jugar-der-title">
                    Descubre
                </h6>
                <span className='jugar-der-texto-title'> EL MONSTRUO FINANCIERO </span>
                <p className='jugar-der-texto'>
                   con quien haces <span className='moonlight'>match</span><br></br>
                   <p className='parentesis'>{'(Y está acechando tus finanzas)'}</p>
                </p>
                {/* <img src={match} alt="texto" className='match-texto'/> */}
                <img src={persona2} alt="persona1" className='persona2' />
                <img src={persona2Desk} alt="persona1" className='persona2Desk' />
                <Link to='citas-monstruos'>
                    <div className='azul'>JUGAR</div>
                </Link>
            </div>
        </div>
    )
}

export default Jugar