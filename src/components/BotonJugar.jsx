import './BotonJugar.css'

const BotonJugar = ({ customClass = {}, onClick }) => {
    return(
        <div className={`boton-jugar`} style={customClass} onClick={onClick}>JUGAR</div>
    )
}

export default BotonJugar