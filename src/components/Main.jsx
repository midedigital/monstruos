import Header from './Header'
import SubHeader from './SubHeader'
import Galeria from './Galeria'
import Jugar from './Jugar'
import Footer from './Footer'
import './Main.css'
import MyGallery from './MyGallery'

const Main = () => {
    return(
        <div className='main-app'>
            <MyGallery />
            <Header />
            <SubHeader />
            <Galeria />
            <Jugar />
            <Footer />
        </div>
    )
}

export default Main