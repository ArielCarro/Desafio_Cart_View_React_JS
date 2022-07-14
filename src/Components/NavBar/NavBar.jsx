import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import Logo from './Logo'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className='navBar'>
            <Container className='navBarContainer'>
                < div className='logoBrand'>
                    <Logo />
                    <Navbar.Brand href="#home">Oracle Sport</Navbar.Brand>
                </ div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#hombres">Hombres</Nav.Link>
                            <Nav.Link href="#mujeres">Mujeres</Nav.Link>
                            <NavDropdown title="Accesorios" id="collasible-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1">Barras y Discos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Bandas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Guantes y Calleras</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav>
                            <Nav.Link href="#contactanos">Contactanos</Nav.Link>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default NavBar