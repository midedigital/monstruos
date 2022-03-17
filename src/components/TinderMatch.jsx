import './TinderMatch.css'
import heart from '../assets/heart-match.svg'

const TinderMatch = ({ match }) => {
    return(
        <div className="tinder-match">
            <img src={heart} alt="heart" className='tinder-match-heart' />
            <h1 className='tinder-match-title'>¡Hicieron <span>Match!</span></h1>
            <span className='tinder-match-texto'>
                Ahora que sabes con que monstruo haces match puedes conocerlo más o si te sientes listo puedes ir a enfrentarlo
            </span>
            <div className="tinder-match-circle" />
            <img src={match.url} alt="match" className="tinder-match-img"/>
            <div className="tinder-match-botones">
                <div className="boton-conoce">Conoce a tu monstruo</div>
                <div className="boton-conoce">Vence a tu monstruo</div>
            </div>
        </div>
    )
}

export default TinderMatch