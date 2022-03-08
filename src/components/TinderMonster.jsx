import './TinderMonster.css'

const TinderMonster = ({ monster }) => {
    
    return(
        <div className='tinder-monster-card'>
            <div className="text-ellipse">
                <img src={monster.url} alt="monstruo" className="tinder-monster-img" />
                <span className='tinder-monster-pregunta'>{monster.pregunta}</span>
            </div>
            <div className="square-1">
                <img src="" alt="" />
                <span>{monster.left}</span>
            </div>
            <div className="square-2">
                <img src="" alt="" />
                <span>{monster.right}</span>    
            </div>
        </div>
    )
}

export default TinderMonster