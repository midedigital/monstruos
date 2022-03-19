import './Modal.css'
import cerrar from '../assets/cerrar-modal.svg'
import YouTube from 'react-youtube'
import MyGallery from './MyGallery'


const Modal = ({ isOpen, closeModal, content }) => {
    console.log(content.slideshow)
    return(
        <div className={isOpen ? 'modal-galeria' : 'd-none'}>
            <div className='modal-galeria-content'>
                <h3 className='modal-title'>Monstruo</h3>
                <span className='modal-galeria-desc'>{content.desc?.toUpperCase()}</span>
                <br />
                <div className='px-3'>
                    <span className='modal-frase'>{content.frase}</span>
                </div>
                <div onClick={closeModal}>
                    <img src={cerrar} alt="cerrar" className='modal-cerrar' />
                </div>
                <YouTube videoId={content.url} className='modal-youtube'/>
                {/* <div className='modal-slideshow'>
                    <MyGallery images={content.slideshow} showThumbnails={false} />
                </div>   */}     
                <div className='modal-slideshow'>
                    <MyGallery 
                        images={content.slideshow} 
                        showThumbnails={false} 
                        width={'95%'}
                    />     
                </div>
                <div className='modal-slideshow-desktop'>
                    <MyGallery 
                        images={content.slideshow} 
                        showThumbnails={false} 
                        width={'55%'}
                    />     
                </div>
            </div>
        </div>
    )
}

export default Modal