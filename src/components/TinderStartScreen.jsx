import './TinderStartScreen.css'
import logo from '../assets/logo.svg'
import BotonJugar from './BotonJugar'
import bubble from '../assets/burbuja-corazon.svg'
import persona from '../assets/persona-1.png'
import monstruo from '../assets/monstruo3.png'
import Footer from './Footer'

const TinderStartScreen = ({ setStart }) => {
    return(
        <div className="tinder-start-screen">
            <div className="d-flex justify-content-center">
                <img src={logo} alt="logo" className='tinder-start-screen-logo'/>
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center mt-4">
                <span className="moonlight tinder-start-screen-moonlight">De cita con</span>
                <span className='tinder-start-screen-subtitle'>MI MONSTRUO FINANCIERO</span>
            </div>
            <div>
                <img src={bubble} alt="burbuja" className='burbuja-corazon'/>
                <img src={persona} alt="persona" className='tinder-start-screen-persona' />
                <img src={monstruo} alt="monstruo" className='tinder-start-screen-monstruo' />
            </div>
            <div className="d-flex justify-content-center">
                <BotonJugar 
                    customClass={{marginTop: '1em', border: '3px solid pink'}}
                    onClick={() => setStart(false)}
                />
            </div>
            <Footer />
        </div>
    )
}

export default TinderStartScreen