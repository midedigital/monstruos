import './Footer.css'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import tikTok from '../assets/tik-tok.png'
import tw from '../assets/tw.png'
import mail from '../assets/mail.png'

const Footer = () => {
    return(
        <div className="footer">
            <img src={fb} alt="facebook" width={'45px'} className='mx-1' />
            <img src={ig} alt="instagram" width={'45px'} className='mx-1' />
            <img src={tikTok} alt="tik-tok" width={'45px'} className='mx-1' />
            <img src={tw} alt="twitter" width={'45px'} className='mx-1' />
            <img src={mail} alt="mail" width={'45px'} className='mx-1' />
        </div>
    )
}

export default Footer