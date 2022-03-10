import './Galeria.css'
import Masonry from 'react-masonry-css'
import monsters from './monsterData'

const Galeria = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 2
      };
    return(
        <div className='galeria'>
            <div className="galeria-text">
                <h3 className="moonlight" style={{ color: 'black'}}>Galería del horror</h3>
                <h6 className='mb-4'>DESCUBRE TU MONSTRUO FINANCIERO Y APRENDE</h6>
                <span className='mb-4'>Toca alguno de los monstruos, identifica cuáles han estado atormentado a tus finanzas y descubre cómo puedes vencerlos.
                </span>
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {monsters.map((e, index) => 
                    <div style={{ backgroundColor: e.color }}>
                        <img src={`/images/monstruos/monstruo${index+1}.png`} alt={e.nombre} className={e.customClass === true ? `customClass-${index} img-hover` : 'img-monstruo'} style={index === 1 ? {paddingTop: 0} : {paddingTop: '1em'}}/>
                    </div>
                )}
            </Masonry>
        </div>
    )
}

export default Galeria