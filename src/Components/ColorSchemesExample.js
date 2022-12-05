import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import colorSchemesExampl from "./colorSchemesExampl.css"

function ColorSchemesExample() {
  return (
      <Navbar >
        <Container className='navbar-container'>
          <Nav className="me-auto" >
            <Nav.Link className='links' href="#Accion">Acción</Nav.Link>
            <Nav.Link  className='links' href="#Aventura">Aventura</Nav.Link>
            <Nav.Link  className='links' href="#Multijugador">Multijugador</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default ColorSchemesExample;