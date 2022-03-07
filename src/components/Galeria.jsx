import './Galeria.css'
import Masonry from 'react-masonry-css'
import monsters from './monsterData'

const Galeria = () => {
    return(
        <div className='galeria'>
            <div className="galeria-text">
                <h3 className='mb-4'>Lorem Impsum</h3>
                <h6 className='mb-4'>DESCUBRE TU MONSTRUO FINANCIERO Y APRENDE</h6>
                <span className='mb-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
                enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis 
                nisl ut aliquip ex ea commodo consequat. 
                </span>
            </div>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {monsters.map((e, index) => 
                    <div style={{ backgroundColor: e.color }}>
                        <div>{e.nombre}</div>
                        <img src={`/images/monstruos/monstruo${index+1}.png`} alt={e.nombre} width='400px'/>
                    </div>
                )}
            </Masonry>
        </div>
    )
}

export default Galeria