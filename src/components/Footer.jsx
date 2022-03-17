import './Footer.css'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import tikTok from '../assets/tik-tok.png'
import tw from '../assets/tw.png'
import mail from '../assets/mail.png'
import mide from '../assets/mide-logo.svg'

const Footer = ({ style }) => {
    return(
        <div className="footer" style={style}>
            <img src={mide} alt="mide" className='mide-footer' />
            <img src={fb} alt="facebook" className='logo' />
            <img src={ig} alt="instagram" className='logo' />
            <img src={tikTok} alt="tik-tok" className='logo' />
            <img src={tw} alt="twitter" className='logo' />
            <img src={mail} alt="mail" className='logo' />
        </div>
    )
}

export default Footer