import './Modal.css'
import cerrar from '../assets/cerrar-modal.svg'

const Modal = ({ isOpen, closeModal, content }) => {
    return(
        <div className={isOpen ? 'modal-galeria' : 'd-none'}>
            <div className='modal-galeria-content'>
                <h3 className='moonlight'>Monstruo</h3>
                <span>DE LAS {content.nombre?.toUpperCase()}</span>
                <div onClick={closeModal}>
                    <img src={cerrar} alt="cerrar" className='modal-cerrar' />
                </div>
            </div>
        </div>
    )
}

export default Modal