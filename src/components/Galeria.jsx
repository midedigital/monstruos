import './Galeria.css'
import Masonry from 'react-masonry-css'
import galeria from '../data/monstruos-galeria-alt'
import galeriaDesk from '../data/monstruos-galeria'
import Modal from './Modal'
import { useState } from 'react'

const Galeria = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [content, setContent] = useState({})

    const openModal = (monstruo) => {
        document.body.style.overflow = 'hidden'
        setContent(monstruo)
        setIsOpen(true)
    }

    const closeModal = () => {
        document.body.style.overflow = 'auto'
        setIsOpen(false)
    }

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 2
      };
    return(
        <div className='galeria' id='galeria'>
            <div className="galeria-text">
                <h3 className="moonlight galeria-title" style={{ color: 'black'}}>Galería del horror</h3>
                <h6 className='mb-3 galeria-sub-title'>DETRÁS DE CADA DECISIÓN HAY UN MONSTRUO FINANCIERO.</h6>
                <p className='galeria-text-content'>
                    Toca alguno de los monstruos, identifica cuáles han estado atormentado a tus finanzas y descubre cómo puedes vencerlos.
                </p>
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid movil"
                columnClassName="my-masonry-grid_column"
            >
                {galeria.map((e, index) => 
          
                    <div key={e.nombre} onClick={() => openModal(e)}>
                        <div className="d-flex justify-content-center">
                            <div className="galeria-item-texto">
                                <h3 className='moonlight galeria-item-header'>Monstruo</h3>
                                <span>{e.nombre?.toUpperCase()}</span>
                            </div>
                        </div>
                        <img src={e.img} alt={e.nombre} className={e.customClass === true ? `customClass-${index}` : 'img-monstruo'} />
                    </div>

                )}
            </Masonry>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid desk"
                columnClassName="my-masonry-grid_column"
            >
                {galeriaDesk.map((e, index) => 
                    <div className='Parent' key={e.nombre} onClick={() => openModal(e)}>
                        <img src={e.img} alt={e.nombre} className={e.customClass === true ? `customClass-${index}` : 'img-monstruo'} />
                        <div className='overlay'>
                            <h1 className='overlay-text'>Monstruo</h1>
                            <span>{e.nombre.toUpperCase()}</span>
                        </div>
                    </div>
                )}
            </Masonry>
            <Modal isOpen={isOpen} closeModal={closeModal} content={content} />
        </div>
    )
}

export default Galeria