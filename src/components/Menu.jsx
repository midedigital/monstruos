import './Menu.css'
import { HashLink } from 'react-router-hash-link';

const Menu = ( {menu }) => {
    return(
        <div className={menu ? "menu-flotante" : 'd-none'}>
            <HashLink to='/#galeria'>
                <span>GALERIA</span>
            </HashLink>
            <hr />
            <HashLink to='/#juega'>
                <span>JUEGA</span>
            </HashLink>
        </div>
    )
}

export default Menu