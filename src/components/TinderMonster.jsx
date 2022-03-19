import './TinderMonster.css'
import bubble from '../assets/bubble.svg'

const TinderMonster = ({ monster, index, swipe }) => {
    
    return(
        <div className='tinder-monster-card'>
            <div className="tinder-monster-card-upper">
                <img src={bubble} alt="tinder-number" className='tinder-number' />
                <span className='tinder-number-text'>{9 - index}</span>
                <div className="text-ellipse">
                    <span className='tinder-monster-pregunta'>{monster.pregunta}</span>
                    <img src={monster.url} alt="monstruo" className="tinder-monster-img" />
                </div>
            </div>
            <div className="tinder-monster-card-lower">
                <div className="square-1">
                    <span>{monster.left}</span>
                </div>
                <div className="square-2">
                    <span>{monster.right}</span>    
                </div>
            </div>
        </div>
    )
}

export default TinderMonster