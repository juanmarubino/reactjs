import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"

const NavBar =()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Route 16</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Autos</Nav.Link>
                    <Nav.Link href="#pricing">Camionetas</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} href="#memes">
                    <CartWidget />
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar