import './Jugar.css'
import persona1 from '../assets/persona-1.png'
import persona2 from '../assets/persona-2.png'
import BotonJugar from './BotonJugar'

const Jugar = () => {
    return(
        <div className='jugar'>
            <div className='jugar-izq'>
                <span className='jugar-izq-texto'>¡Desafía tus habitos y enfrentate a tus monstruos financieros!</span>
                <img src={persona1} alt="persona1" height={'350px'} className='persona1' />
            </div>
            <div className='jugar-der'>
                <BotonJugar customClass={{ marginLeft: '-2.5em', marginTop: '-0.5em'}} />
                <img src={persona2} alt="persona2" height={'350px'} className='persona2' />
            </div>
        </div>
    )
}

export default Jugar