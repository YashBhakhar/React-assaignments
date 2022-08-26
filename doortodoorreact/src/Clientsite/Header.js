import React from 'react';
import { Navbar, Container, Nav, Button, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import mystyle from './style.module.css'


function Header(props) {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <i className={`${mystyle.font} fa fa-house`}></i>
                    <LinkContainer to='/'>
                        <Navbar.Brand href="#home" className={mystyle.nav}>DoorToDoor</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className={mystyle.nav2}>
                        <Nav className="me-auto">
                            <LinkContainer to='/'>
                                <Nav.Link href="#features" className={mystyle.navbar}>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/service'>
                                <Nav.Link href="#deets" className={mystyle.navbar}>Services</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/about'>
                                <Nav.Link href="#pricing" className={mystyle.navbar}>About</Nav.Link>
                            </LinkContainer>
                            {
                                localStorage.getItem('user') ? <>
                                    <LinkContainer to='/profile'>
                                        <Nav.Link href="#pricing" className={mystyle.navbar}>Profile</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to='/myservice'>
                                        <Nav.Link href="#pricing" className={mystyle.navbar}>MyService</Nav.Link>
                                    </LinkContainer>
                                    <Button className={mystyle.button} onClick={handleLogout}>Logout</Button>
                                </> :
                                    <LinkContainer to='/login'>
                                        <Button className={mystyle.button}>LogIn</Button>
                                    </LinkContainer>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;