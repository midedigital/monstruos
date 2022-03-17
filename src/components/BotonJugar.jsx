import './BotonJugar.css'

const BotonJugar = ({ customClass = {}, onClick, texto = 'JUGAR'}) => {
    return(
        <div className={`boton-jugar`} style={customClass} onClick={onClick}>{texto}</div>
    )
}

export default BotonJugar