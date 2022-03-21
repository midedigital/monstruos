import './TinderMatch.css'
import heart from '../assets/heart-match.svg'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const TinderMatch = ({ match }) => {
    return(
        <div className="tinder-match">
            <div className='tinder-match-container'>
                <div className='d-flex flex-column align-items-center tinder-match-texto-container'>
                    <img src={heart} alt="heart" className='tinder-match-heart' />
                    <h1 className='tinder-match-title'>¡Hicieron <span>Match!</span></h1>
                    <span className='tinder-match-texto'>
                        Ahora que sabes con qué monstruo haces match, puedes conocerlo más, o si te sientes listo, puedes ir a enfrentarlo.
                    </span>
                </div>
                <div className="tinder-match-circle d-none" />
                <img src={match.url} alt="match" className="tinder-match-img"/>
                <div className='tinder-match-text-bundle'>
                    <h2 className='tinder-match-moonlight'>Monstruo</h2>
                    <h3 className='tinder-match-monster-name'>{match.match?.toUpperCase()}</h3>
                </div>
                <div className="tinder-match-botones">
                    <HashLink to={'/#galeria'}>
                        <div className="boton-conoce">Conoce a tu monstruo</div>
                    </HashLink>
                    <HashLink to={'/#juega'}>
                        <div className="boton-conoce">Vence a tu monstruo</div>
                    </HashLink>
                </div>
            </div>
            <Footer className='tinder-match-footer'/>
        </div>
    )
}

export default TinderMatch