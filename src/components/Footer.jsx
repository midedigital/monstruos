import './Footer.css'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import tikTok from '../assets/tik-tok.png'
import tw from '../assets/tw.png'
import mail from '../assets/mail.png'
import mide from '../assets/mide-logo.svg'

const Footer = ({ style, className }) => {
    return(
        <div className={`footer ${className}`} style={style} >
            {/* <a href='https://www.mide.org.mx' target="_blank" rel="noopener noreferrer">
                <img src={mide} alt="mide" className='mide-footer' />
            </a> */}
            <span className='footer-text'>#Monstruos Financieros</span>
            <a href="https://www.facebook.com/museomide/" target="_blank" rel="noopener noreferrer">
                <img src={fb} alt="facebook" className='logo' />
            </a>
            <a>
                <img src={ig} alt="instagram" className='logo' />
            </a>
            <a>
                <img src={tikTok} alt="tik-tok" className='logo' />
            </a>
            <a>
                <img src={tw} alt="twitter" className='logo' />
            </a>
            <a>
                <img src={mail} alt="mail" className='logo' />
            </a>
        </div>
    )
}

export default Footer