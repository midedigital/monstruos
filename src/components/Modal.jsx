import './Modal.css'
import cerrar from '../assets/cerrar-modal.svg'
import YouTube from 'react-youtube'
import info from '../assets/info-monstruo-deudas.jpg'

const Modal = ({ isOpen, closeModal, content }) => {
    return(
        <div className={isOpen ? 'modal-galeria' : 'd-none'}>
            <div className='modal-galeria-content'>
                <h3 className='moonlight modal-title'>Monstruo</h3>
                <span>{content.desc?.toUpperCase()}</span>
                <br />
                <span className='modal-frase'>{content.frase}</span>
                <div onClick={closeModal}>
                    <img src={cerrar} alt="cerrar" className='modal-cerrar' />
                </div>
                <YouTube videoId='mNk66eG9tZM' className='modal-youtube'/>
                <img src={info} alt="info" className='info' />
            </div>
        </div>
    )
}

export default Modal