import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const MyGallery = ({ images = [], showThumbnails, width }) => {
    return(
        /* <ImageGallery 
            items={images} 
            showThumbnails={showThumbnails} 
            useTranslate3D={false}
            infinite={false}
            showNav={true}
        /> */
        <Carousel width={width} showThumbs={showThumbnails}>
            {images.map((e, index) =>
            <div key={index}>
                <img src={e.original} alt="image" />
            </div>)}
        </Carousel>
    )
}

export default MyGallery