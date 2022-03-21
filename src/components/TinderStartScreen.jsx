import './TinderStartScreen.css'
import logo from '../assets/logo.svg'
import BotonJugar from './BotonJugar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import TinderInstructions from './TinderInstructions'
import startHero from '../assets/start-hero.png'

const TinderStartScreen = ({ setStart }) => {
    const [instructions, setInstructions] = useState(false)

    return(
        <>
        {
        !instructions
        ?
        <div className="tinder-start-screen-container">
            <div className="tinder-start-screen">
                <div className="tinder-start-screen-logo-container">
                    <Link to='/'>
                        <img src={logo} alt="logo" className='tinder-start-screen-logo'/>
                    </Link>
                </div>
                <div className="tinder-start-screen-text-container">
                    <span className="tinder-start-screen-moonlight">De cita con</span>
                    <span className='tinder-start-screen-subtitle'>MI MONSTRUO FINANCIERO</span>
                </div>
                <div className='tinder-start-screen-img-container'>
                    <img src={startHero} alt="hero" className='tinder-start-screen-hero' />
                </div>
                <div className="tinder-start-boton-jugar-container" onClick={() => setInstructions(true)}>
                    <BotonJugar 
                        customClass={{marginTop: '1em', border: '3px solid pink'}}
                        texto='INICIAR'
                        customClass2={'start-boton-jugar'}
                    />
                </div>
                <Footer className={'start-footer'}/>
            </div>
        </div>
        :
        <TinderInstructions setStart={setStart} />
        }
        </>
    )
}

export default TinderStartScreen