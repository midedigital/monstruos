import './Header.css'
import logo from '../assets/logo-monstruos2.svg'

const Header = () => {
    return(
        <div className='header'>
            <div className='menu'>
                <span className='ojo'>Ojo</span>
            </div>
            <div className="d-flex justify-content-center">
                <img className='header-logo my-3' src={logo} alt="logo" width={'150px'} />
            </div>
            <div className='header-content'>
                <div className="header-content-text">
                    <h3>Lorem Ipsum</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ipsam cumque consequuntur eius ullam dolore eos, voluptas, distinctio tempore maxime accusantium alias eaque enim ad, esse explicabo doloribus dignissimos aliquid.</span>
                    <div className="header-content-boton mt-2">Jugar</div>
                </div>
                <div className='header-content-monstruo'>
                    <span>Monstruo</span>
                </div>
            </div>
        </div>
    )
}

export default Header