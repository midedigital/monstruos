import './Galeria.css'
import Masonry from 'react-masonry-css'

const Galeria = () => {
    const arr = [1,2,3,4,5,6,7,8,9]
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
                {arr.map(e => 
                    <div>{e}</div>
                )}
            </Masonry>
        </div>
    )
}

export default Galeria