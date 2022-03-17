import Header from './Header'
import SubHeader from './SubHeader'
import Galeria from './Galeria'
import Jugar from './Jugar'
import Footer from './Footer'
import './Main.css'

const Main = () => {
    return(
        <div className='main-app'>
            <Header />
            <SubHeader />
            <Galeria />
            <Jugar />
            <Footer />
        </div>
    )
}

export default Main