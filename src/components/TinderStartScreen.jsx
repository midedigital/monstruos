import './TinderStartScreen.css'
import logo from '../assets/logo.svg'
import BotonJugar from './BotonJugar'
import bubble from '../assets/burbuja-corazon.svg'
import persona from '../assets/persona-relleno.svg'
import monstruo from '../assets/monstruo-start.svg'
import Footer from './Footer'
import bats from '../assets/bats.svg'
import hearts from '../assets/hearts.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import TinderInstructions from './TinderInstructions'

const TinderStartScreen = ({ setStart }) => {
    const [instructions, setInstructions] = useState(false)

    return(
        <>
        {
        !instructions
        ?
        <div className="tinder-start-screen">
            <div className="d-flex justify-content-center">
                <Link to='/'>
                    <img src={logo} alt="logo" className='tinder-start-screen-logo'/>
                </Link>
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center mt-4">
                <span className="moonlight tinder-start-screen-moonlight">De cita con</span>
                <span className='tinder-start-screen-subtitle'>MI MONSTRUO FINANCIERO</span>
            </div>
            <div className='tinder-start-screen-img-container'>
                <img src={bats} alt="bats" className='bats' />
                <img src={hearts} alt="hearts" className='hearts' />
                <img src={bubble} alt="burbuja" className='burbuja-corazon'/>
                <img src={persona} alt="persona" className='tinder-start-screen-persona' />
                <img src={monstruo} alt="monstruo" className='tinder-start-screen-monstruo' />
            </div>
            <div className="d-flex justify-content-center">
                <BotonJugar 
                    customClass={{marginTop: '1em', border: '3px solid pink'}}
                    onClick={() => setInstructions(true)}
                    texto='INICIAR'
                />
            </div>
            <Footer style={{ position: 'absolute', width: '100vw', bottom: 0}}/>
        </div>
        :
        <TinderInstructions setStart={setStart} />
        }
        </>
    )
}

export default TinderStartScreen