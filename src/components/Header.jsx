import './Header.css'
import logo from '../assets/logo.svg'
import ojo from '../assets/ojo.png'
import hero from '../assets/hero.png'
import BotonJugar from './BotonJugar'
import mide from '../assets/mide-nube.png'
import lineaRoja from '../assets/linea-roja.svg'

const Header = () => {
    return(
        <div className='header'>
           {/*  <img src={mide} alt="mide" className='mide' /> */}
            <div className='menu'>
                <img className='ojo' src={ojo} alt='ojo' />
            </div>
            <div className="d-flex justify-content-center">
                <img className='header-logo' src={logo} alt="logo" />
            </div>
            <div className='header-content'>
                <div className="header-content-text">
                    <img src={lineaRoja} alt="linea" className='linea-roja-header' />
                    <h3 className="moonlight header-text">Descubre...</h3>
                    <div className="ms-3">                    
                        <p className='header-text-subtitle'>cómo domar a tus monstruos financieros y tomar el control de tu dinero.
                        </p>
                    </div>
                </div>
                <div className='header-content-monstruo'>
                    <img src={hero} alt="hero" className='header-content-monstruo-img' />
                </div>
            </div>
        </div>
    )
}

export default Header