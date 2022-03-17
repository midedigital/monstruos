import './SubHeader.css'
import monstruo from '../assets/monstruo-2-header.svg'
import lineaSubheader from '../assets/linea-subheader.svg'
import lineaSubHeaderDesk from '../assets/linea-subHeader-desktop.svg'

const SubHeader = () => {
    return(
        <div className="sub-header">
            <img src={monstruo} alt="monstruo" className='sub-header-monstruo' />
            <div className="sub-header-text">
                <img src={lineaSubheader} alt="linea" className='sub-header-linea' />
                <img src={lineaSubHeaderDesk} alt="linea" className='sub-header-linea-desktop' />
                <h6 className='sub-header-text-title'>¿QUIÉNES SON LOS<br></br> MONSTRUOS FINANCIEROS? </h6>
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