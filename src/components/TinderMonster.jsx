import './TinderMonster.css'
import bubble from '../assets/bubble.svg'
import leftArrow from '../assets/left_arrow.svg'
import rightArrow from '../assets/right_arrow.svg'

const TinderMonster = ({ monster, index, swipe }) => {
    
    return(
        <div className='tinder-monster-card'>
            <img src={bubble} alt="tinder-number" className='tinder-number' />
            <span className='tinder-number-text'>{index + 1}</span>
            <div className="text-ellipse">
                <img src={monster.url} alt="monstruo" className="tinder-monster-img" />
                <span className='tinder-monster-pregunta'>{monster.pregunta}</span>
            </div>
            <div className="square-1">
                <span>{monster.left}</span>
            </div>
            <div className="square-2">
                <span>{monster.right}</span>    
            </div>
        </div>
    )
}

export default TinderMonster