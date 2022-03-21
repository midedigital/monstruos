import './TinderInstructions.css'
import Footer from './Footer'
import tinderInstructions from '../assets/tinder-instructions.svg'
import BotonJugar from './BotonJugar'

const TinderInstructions = ({ setStart }) => {
    return(
        <div className="tinder-instructions-container">
            <div className='tinder-instructions'>    
                <div className="tinder-instructions-text">
                    <h3 className="tinder-instructions-moonlight">Descubre</h3>
                    <span className="tinder-instructions-title">EL MONSTRUO FINANCIERO</span>
                    <span className='tinder-instructions-content'>
                        con quien haces <span className='tinder-instructions-accent'> match</span> <br /> de acuerdo a tus comportamientos y <br /> 
                        habitos financieros <br />
                        <span className='bloque-naranja-span'>{'(Y está acechando tus finanzas)'}</span>
                    </span>
                </div>
                <img src={tinderInstructions} alt="tinder-instructions" className='tinder-instructions-img' />
                <BotonJugar 
                    customClass={{ backgroundColor: '#F6C67B'}} 
                    onClick={() => setStart(false)} 
                    customClass2={'boton-instructions'}
                />
                <div className="bloque-naranja">
                    <p>Desliza a la izquierda o derecha con la respuesta que más te identifiques y <br /> <br />
                    ¡Descubre con quien haces <span>Match!</span></p>
                </div>
                <Footer className='tinder-instructions-footer' />
            </div>
        </div>
    )
}

export default TinderInstructions