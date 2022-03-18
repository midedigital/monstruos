import './BotonJugar.css'

const BotonJugar = ({ customClass = {}, onClick, texto = 'JUGAR', customClass2 }) => {
    return(
        <div className={`boton-jugar ${customClass2}`} style={customClass} onClick={onClick}>{texto}</div>
    )
}

export default BotonJugar