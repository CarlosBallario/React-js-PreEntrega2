import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function ColorBlue() {
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to ="/"><Logo/></Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Notebook</Link>
            <Link to="/asus">Asus</Link>
            <Link to="/dell">Dell</Link>
            <Link to="/msi">MSI</Link>
            
          </Nav>
          <Link to="/cart"><CartWidget/></Link>
        </Container>
      </Navbar>
    </div>
      );
    }   
    export default ColorBlue;