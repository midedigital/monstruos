import './TinderMatch.css'
import heart from '../assets/heart-match.svg'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const TinderMatch = ({ match }) => {
    return(
        <div className="tinder-match">
            <div className='d-flex flex-column align-items-center tinder-match-texto-container'>
                <img src={heart} alt="heart" className='tinder-match-heart' />
                <h1 className='tinder-match-title'>¡Hicieron <span>Match!</span></h1>
                <span className='tinder-match-texto'>
                    Ahora que sabes con que monstruo haces match puedes conocerlo más o si te sientes listo puedes ir a enfrentarlo.
                </span>
            </div>
            <div className="tinder-match-circle" />
            <img src={match.url} alt="match" className="tinder-match-img"/>
            <div className="tinder-match-botones">
                <Link to={'/'}>
                    <div className="boton-conoce">Conoce a tu monstruo</div>
                </Link>
                <div className="boton-conoce">Vence a tu monstruo</div>
            </div>
            <Footer style={{ position: 'absolute', width: '100vw', bottom: 0}}/>
        </div>
    )
}

export default TinderMatch