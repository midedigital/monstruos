import './Jugar.css'
import persona1 from '../assets/jugar-izq.svg'
import persona2 from '../assets/jugar-der.svg'
import BotonJugar from './BotonJugar'

const Jugar = () => {
    return(
        <div className='jugar'>
            <div className='jugar-izq'>
                <h6 className="moonlight jugar-izq-title">
                    ¿Estas listo?
                </h6>
                <p className='jugar-izq-texto'>
                    ¡Pon en juego tus hábitos y <br></br> enfrenta a tus monstruos <br></br>financieros!
                </p>
                <img src={persona1} alt="persona1" className='persona1' />
                <BotonJugar customClass={{ width: '70px', height: '25px', backgroundColor: '#f6c67a', fontSize: '12px', marginLeft: '2em', marginTop: '1em'}}/>
            </div>
            <div className='jugar-der'>
                <h6 className="moonlight jugar-der-title">
                    Descubre
                </h6>
                <span className='jugar-der-texto-title'> EL MONSTRUO FINANCIERO </span>
                <p className='jugar-der-texto'>
                   con quien haces <span className='moonlight'>match</span>
                </p>
                <img src={persona2} alt="persona1" className='persona2' />
                <BotonJugar customClass={{ width: '70px', height: '25px', backgroundColor: '#d3e3d6', fontSize: '12px', marginLeft: '2em', marginTop: '1em'}}/>
            </div>
        </div>
    )
}

export default Jugar