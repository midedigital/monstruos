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
                <h6 className='mb-4'>DESCUBRE TU MONSTRUO FINANCIERO Y APRENDE</h6>
                <span className='mb-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
                enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis 
                nisl ut aliquip ex ea commodo consequat. 
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