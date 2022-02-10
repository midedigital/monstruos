import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import logo from '../assets/logo-monstruos2.svg'
import './Header.css'

const Header = () => {
    return(
        <Navbar className="nav-color" sticky='top' variant='dark'>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <img 
                            src={logo} 
                            alt='logo' 
                            width='70'
                            height='70'
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link style={{ color: 'white'}}>Galeria</Nav.Link>
                        <Nav.Link style={{ color: 'white'}}>Info</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header