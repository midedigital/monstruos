import './Header.css'
import logo from '../assets/logo.svg'
import ojo from '../assets/ojo.png'
import hero from '../assets/hero.png'
import BotonJugar from './BotonJugar'
import mide from '../assets/mide-nube.png'

const Header = () => {
    return(
        <div className='header'>
            <img src={mide} alt="mide" className='mide' />
            <div className='menu'>
                <img className='ojo' src={ojo} alt='ojo' />
            </div>
            <div className="d-flex justify-content-center">
                <img className='header-logo' src={logo} alt="logo" />
            </div>
            <div className='header-content'>
                <div className="header-content-text">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ipsam cumque consequuntur eius ullam dolore eos, voluptas, distinctio tempore maxime accusantium alias eaque enim ad, esse explicabo doloribus dignissimos aliquid.</span>
                    {/* <div className="header-content-boton mt-2">Jugar</div> */}
                    <BotonJugar />
                </div>
                <div className='header-content-monstruo'>
                    <img src={hero} alt="hero" className='header-content-monstruo-img' />
                </div>
            </div>
        </div>
    )
}

export default Header