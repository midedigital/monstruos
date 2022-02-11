import { Link } from 'react-router-dom'
import logo from '../assets/logo-monstruos-fn-01.png'
import Galeria from './Galeria'
import './Main.css'

const Main = () => {
    return(
        <div className='container parallax'>
            <div className="d-flex flex-column align-items-center">
                <img className='main-logo' src={logo} alt="logo" width='250' height='250'/>
                {/* <h1 className='mt-5 main-title'>Monstruos Financieros</h1> */}
                <p className="mt-4 lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit neque ex, ut feugiat erat eleifend ac. Mauris in luctus lacus, at tempor ipsum. Suspendisse malesuada ut mauris vel viverra. Donec sit amet consectetur felis. Suspendisse potenti. </p>
                <p className="mt-5" style={{ fontSize: '36px'}}>
                    <strong>
                        Mira los videos
                    </strong>
                </p>
                <Galeria />
                <div className='mt-5'>
                    <Link to='/monstruos'>
                        <p className="elegir-monstruo">
                            <strong>
                                    Pelea contra tu monstruo   
                            </strong>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Main