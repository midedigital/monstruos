import './Header.css'
import logo from '../assets/logo.svg'
import ojo from '../assets/ojo.png'
import hero from '../assets/hero.png'
import mide from '../assets/mide-logo.svg'
import lineaRoja from '../assets/linea-roja.svg'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import { useState } from 'react'
import ojoCerrado from '../assets/ojo-cerrado.svg'

const Header = () => {
    const [menu, setMenu] = useState(false)

    return(
        <div className='header'>
            <Menu menu={menu} />
            <div className='menu'>
                <div onClick={() => setMenu(!menu)} className={menu ? '' : 'd-none'}>
                    <img className='ojo' src={ojo} alt='ojo' />
                </div>
                <div onClick={() => setMenu(!menu)} className={!menu ? '' : 'd-none'}>
                    <img className='ojoCerrado' src={ojoCerrado} alt='ojo' />
                </div>
            </div>
            <Link to='/'>
                <div className="d-flex justify-content-center">
                    <img className='header-logo' src={logo} alt="logo" />
                </div>
            </Link>
            <img src={mide} alt="mide" className='mide' />
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