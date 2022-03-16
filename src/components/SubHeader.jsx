import './SubHeader.css'
import monstruo from '../assets/monstruo-2-header.svg'

const SubHeader = () => {
    return(
        <div className="sub-header">
            <img src={monstruo} alt="monstruo" className='sub-header-monstruo' />
            <div className="sub-header-text">
                <h6>¿QUIÉNES SON LOS<br></br> MONSTRUOS FINANCIEROS? </h6>
                <p className='sub-header-text-content'>Cuando tomamos decisiones impulsivas, gastamos de más, ahorramos poco o casi nada...
                    <br></br>
                    <br></br>
                    Está detrás un "Monstruo Financiero" que nos presiona o hace todo lo posible por atacar nuestras finanzas.
                </p>
            </div>
        </div>
    )
}

export default SubHeader